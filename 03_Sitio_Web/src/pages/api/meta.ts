/* Meta Conversions API (eventos desde el servidor).

   El navegador (Analytics.astro) dispara cada evento en el Pixel y, con el
   mismo event_id, lo manda acá con sendBeacon. Este endpoint corre en el
   Worker de Cloudflare y lo reenvía a Meta con la IP real del visitante, su
   navegador, las cookies _fbp/_fbc y el teléfono, correo, nombre y comuna
   cifrados con SHA-256. Meta junta ambas señales por event_id y cuenta una.

   Sólo llegan eventos de personas que aceptaron publicidad en el aviso de
   cookies (Ley 21.719): el navegador no llama a este endpoint sin ese
   consentimiento.

   Configuración en Cloudflare (secretos del Worker, nunca en el código):
     npx wrangler secret put META_CAPI_TOKEN      token de la Conversions API
     npx wrangler secret put META_TEST_CODE       opcional, código de "Probar eventos"
   Sin META_CAPI_TOKEN el endpoint responde 204 y no hace nada. */
import type { APIRoute } from 'astro';
import ajustes from '@/content/ajustes.json';

export const prerender = false;

const VERSION_API = 'v21.0';
const EVENTOS = new Set(['PageView', 'ViewContent', 'Lead', 'Contact']);
const PIXEL = String(ajustes.metaPixelId || '').replace(/\D/g, '');

type Entrada = {
  evento: string;
  id: string;
  url: string;
  datos?: Record<string, string>;
  usuario?: { telefono?: string; email?: string; nombre?: string; comuna?: string; region?: string };
  fbclid?: string;
};

async function sha256(valor: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(valor));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

const hash = async (v?: string) => (v ? [await sha256(v)] : undefined);
const texto = (v?: string) => v?.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z]/g, '') || undefined;

/* Teléfono chileno → 569XXXXXXXX (sólo dígitos, con código de país). */
function telefono(v?: string) {
  const d = (v || '').replace(/\D/g, '');
  if (!d) return undefined;
  if (d.length === 9 && d.startsWith('9')) return '56' + d;
  if (d.length === 8) return '569' + d;
  return d;
}

function cookie(request: Request, nombre: string) {
  const m = (request.headers.get('cookie') || '').match(new RegExp('(?:^|; )' + nombre + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]!) : undefined;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const runtime = (locals as { runtime?: { env?: Record<string, string>; ctx?: { waitUntil(p: Promise<unknown>): void } } }).runtime;
  const token = runtime?.env?.META_CAPI_TOKEN;
  if (!token || !PIXEL) return new Response(null, { status: 204 });

  // Sólo desde el propio sitio.
  const origen = request.headers.get('origin');
  if (origen && new URL(origen).host !== new URL(request.url).host) return new Response(null, { status: 403 });

  let e: Entrada;
  try {
    const cuerpo = await request.text();
    if (cuerpo.length > 4000) return new Response(null, { status: 413 });
    e = JSON.parse(cuerpo);
  } catch {
    return new Response(null, { status: 400 });
  }
  if (!EVENTOS.has(e.evento) || !e.id || !e.url) return new Response(null, { status: 400 });

  const u = e.usuario || {};
  const [nombre, ...apellidos] = (u.nombre || '').trim().split(/\s+/);
  let fbc = cookie(request, '_fbc');
  if (!fbc && e.fbclid) fbc = `fb.1.${Date.now()}.${e.fbclid}`;

  const evento = {
    event_name: e.evento,
    event_time: Math.floor(Date.now() / 1000),
    event_id: e.id,
    event_source_url: e.url,
    action_source: 'website',
    user_data: {
      client_ip_address: request.headers.get('cf-connecting-ip') || undefined,
      client_user_agent: request.headers.get('user-agent') || undefined,
      fbp: cookie(request, '_fbp'),
      fbc,
      ph: await hash(telefono(u.telefono)),
      em: await hash(u.email?.trim().toLowerCase() || undefined),
      fn: await hash(texto(nombre)),
      ln: await hash(texto(apellidos.join(''))),
      ct: await hash(texto(u.comuna)),
      country: await hash('cl'),
    },
    custom_data: e.datos,
  };

  const cuerpo: Record<string, unknown> = { data: [evento] };
  if (runtime?.env?.META_TEST_CODE) cuerpo.test_event_code = runtime.env.META_TEST_CODE;

  const envio = fetch(`https://graph.facebook.com/${VERSION_API}/${PIXEL}/events?access_token=${encodeURIComponent(token)}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(cuerpo),
  })
    .then(async (r) => {
      if (!r.ok) console.error('Meta CAPI', r.status, await r.text());
    })
    .catch((err) => console.error('Meta CAPI', err));

  // Responde altiro; el envío a Meta sigue en segundo plano.
  if (runtime?.ctx?.waitUntil) runtime.ctx.waitUntil(envio);
  else await envio;
  return new Response(null, { status: 204 });
};
