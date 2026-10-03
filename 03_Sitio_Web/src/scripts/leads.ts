/* Contactos (leads) → Google Sheets + medición.

   Cada formulario con `data-lead="venta|compra|contacto"`:
     1. valida y guarda una fila en la planilla (Apps Script, ver docs/google-sheets.md)
        junto con el origen de campaña (utm_*, fbclid, gclid);
     2. dispara el evento Lead en Meta Pixel y generate_lead en GA4;
     3. muestra el mensaje de gracias con un botón a WhatsApp con los datos ya escritos.
   Si la planilla falla o no está configurada, el paso 3 igual ocurre: el
   contacto nunca se pierde del todo. */

declare global {
  interface Window {
    ebzTrack?: (evento: 'Lead' | 'Contact', datos?: Record<string, string>) => void;
  }
}

const ORIGEN = 'ebz-origen';

function origen(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(ORIGEN) || '{}');
  } catch {
    return {};
  }
}

async function guardar(datos: Record<string, string>, url: string) {
  if (!url) return false;
  const cuerpo = new URLSearchParams({ ...datos, ...origen(), pagina: location.pathname, fecha: new Date().toISOString() });
  try {
    // no-cors + form-urlencoded: Apps Script lo recibe sin preflight. La respuesta es opaca.
    await fetch(url, { method: 'POST', mode: 'no-cors', body: cuerpo });
    return true;
  } catch {
    return false;
  }
}

const INTRO = 'Hola, vengo de la web de EBENEZER, ';
const TEXTOS: Record<string, (d: Record<string, string>) => string> = {
  venta: (d) =>
    INTRO +
    `quiero dejar mi auto en consignación para que lo vendan.\n` +
    `Auto: ${d.marca_modelo} ${d.anio} · ${d.km} km · patente ${d.patente}\n` +
    `Soy ${d.nombre}${d.comuna ? ', de ' + d.comuna : ''}. Les envío fotos por aquí.`,
  compra: (d) => INTRO + `busco un ${d.busca}${d.presupuesto ? ' (presupuesto ' + d.presupuesto + ')' : ''}. Soy ${d.nombre}. Avísenme si les llega uno.`,
  contacto: (d) => INTRO + [d.motivo, d.mensaje, `Soy ${d.nombre}.`].filter(Boolean).join('\n'),
};

for (const form of document.querySelectorAll<HTMLFormElement>('form[data-lead]')) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const tipo = form.dataset.lead!;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const btn = form.querySelector<HTMLButtonElement>('[type=submit]');
    btn?.setAttribute('disabled', '');
    btn?.classList.add('ebz-btn--loading');

    if (d.patente) d.patente = d.patente.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const esBot = Boolean(d.sitio_web); // honeypot: los humanos no lo ven
    delete d.sitio_web;
    if (!esBot) {
      await guardar({ tipo, ...d }, form.dataset.sheets || '');
      window.ebzTrack?.('Lead', { tipo });
    }

    const wa = `https://wa.me/${form.dataset.wa}?text=${encodeURIComponent((TEXTOS[tipo] ?? TEXTOS.contacto!)(d))}`;
    const gracias = form.querySelector<HTMLElement>('[data-gracias]');
    form.querySelector<HTMLElement>('[data-campos]')?.setAttribute('hidden', '');
    if (gracias) {
      gracias.hidden = false;
      gracias.querySelector<HTMLAnchorElement>('[data-gracias-wa]')?.setAttribute('href', wa);
      gracias.querySelector<HTMLElement>('[tabindex="-1"]')?.focus();
    }
  });
}

export {};
