/* Contactos (leads) → Google Sheets + medición.

   Cada formulario con `data-lead="venta|credito|compra|contacto"`:
     1. valida y guarda una fila en la planilla (Apps Script, ver docs/google-sheets.md)
        junto con el origen de campaña (utm_*, fbclid, gclid);
     2. dispara el evento Lead en Meta Pixel y generate_lead en GA4;
     3. muestra el mensaje de gracias con un botón a WhatsApp con los datos ya escritos.
   Si la planilla falla o no está configurada, el paso 3 igual ocurre: el
   contacto nunca se pierde del todo.

   Formularios por pasos: los <fieldset data-paso> se muestran de a uno.
   "Continuar" valida sólo los campos del paso visible. */
import { comunasDe } from '@/lib/comunas';
import { MENSAJE_PATENTE, normalizarPatente, patenteValida } from '@/lib/patente';

declare global {
  interface Window {
    ebzTrack?: (evento: string, datos?: Record<string, string>, usuario?: Record<string, string | undefined>) => void;
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
    // no-cors + form-urlencoded: Apps Script (o un webhook de n8n) lo recibe sin preflight. La respuesta es opaca.
    await fetch(url, { method: 'POST', mode: 'no-cors', body: cuerpo });
    return true;
  } catch {
    return false;
  }
}

const INTRO = 'Hola, vengo de la web de EBENEZER, ';
const lugar = (d: Record<string, string>) => [d.comuna, d.region].filter(Boolean).join(', ');
const TEXTOS: Record<string, (d: Record<string, string>) => string> = {
  venta: (d) =>
    INTRO +
    (d.intencion === 'Venta directa' ? 'quiero venderles mi auto.\n' : 'quiero dejar mi auto en consignación para que lo vendan.\n') +
    `Auto: ${d.marca} ${d.modelo} ${d.anio} · ${d.km} km · patente ${d.patente}\n` +
    (d.precio_esperado ? `Espero recibir $${d.precio_esperado}.\n` : '') +
    `Soy ${d.nombre}${lugar(d) ? ', de ' + lugar(d) : ''}. Les envío fotos por aquí.`,
  credito: (d) =>
    INTRO +
    `quiero solicitar financiamiento${d.auto_interes ? ' para el ' + d.auto_interes : ''}.\n` +
    (d.cuota_simulada ? `Simulé un auto de ${d.precio_auto} con ${d.pie} de pie a ${d.plazo} meses (cuota ref. ${d.cuota_simulada}).\n` : '') +
    (d.renta ? `Renta líquida: ${d.renta}.\n` : '') +
    `Soy ${d.nombre}${d.situacion_laboral ? ", " + d.situacion_laboral.toLowerCase() : ""}.` +
    (d.parte_de_pago === 'Sí' ? ' Tengo un auto para dejar en parte de pago.' : ''),
  compra: (d) => INTRO + `busco un ${d.busca}${d.presupuesto ? ' (presupuesto ' + d.presupuesto + ')' : ''}. Soy ${d.nombre}. Avísenme si les llega uno.`,
  contacto: (d) => INTRO + [d.motivo, d.mensaje, `Soy ${d.nombre}.`].filter(Boolean).join('\n'),
};

const AYUDA_INTENCION: Record<string, string> = {
  'Consignación': 'Sigues usando tu auto hasta que haya un comprador. Nosotros lo publicamos y atendemos a los interesados.',
  'Venta directa': 'Te hacemos una oferta y, si te acomoda, te pagamos el auto.',
};

/* Kilometraje y montos: 98000 → 98.000 mientras se escribe. */
for (const input of document.querySelectorAll<HTMLInputElement>('input[data-miles]')) {
  input.addEventListener('input', () => {
    const digitos = input.value.replace(/\D/g, '').slice(0, 11);
    input.value = digitos.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  });
}

/* Patente: se normaliza (dg-lr-28 → DGLR28) y se valida contra los formatos chilenos. */
for (const input of document.querySelectorAll<HTMLInputElement>('input[data-patente]')) {
  const revisar = () => input.setCustomValidity(input.value && !patenteValida(input.value) ? MENSAJE_PATENTE : '');
  input.addEventListener('input', () => {
    input.value = normalizarPatente(input.value).slice(0, 6);
    revisar();
  });
  revisar();
}

/* Marca "Otra marca" → aparece el campo para escribirla. */
for (const marca of document.querySelectorAll<HTMLSelectElement>('select[data-marca]')) {
  const caja = marca.form?.querySelector<HTMLElement>('[data-marca-otra]');
  const otra = caja?.querySelector<HTMLInputElement>('input');
  if (!caja || !otra) continue;
  marca.addEventListener('change', () => {
    const es = marca.value === 'Otra';
    caja.hidden = !es;
    otra.disabled = !es;
    otra.required = es;
    if (es) otra.focus();
  });
}

/* Región → comunas */
for (const region of document.querySelectorAll<HTMLSelectElement>('select[data-region]')) {
  const comuna = region.form?.querySelector<HTMLSelectElement>('select[data-comuna]');
  if (!comuna) continue;
  region.addEventListener('change', () => {
    comuna.replaceChildren(new Option('Comuna', ''), ...comunasDe(region.value).map((c) => new Option(c, c)));
  });
}

function pasos(form: HTMLFormElement) {
  const lista = [...form.querySelectorAll<HTMLFieldSetElement>('fieldset[data-paso]')];
  if (lista.length < 2) return;
  form.classList.add('lead--pasos');
  for (const n of form.querySelectorAll<HTMLElement>('[data-nav]')) n.hidden = false;
  const txt = form.querySelector<HTMLElement>('[data-paso-txt]');
  const barra = form.querySelector<HTMLElement>('[data-progreso]');
  let actual = 0;

  const ir = (i: number, foco = true) => {
    actual = i;
    lista.forEach((fs, j) => (fs.hidden = j !== i));
    if (txt) txt.textContent = `Paso ${i + 1} de ${lista.length} · ${lista[i]!.querySelector('legend')?.textContent ?? ''}`;
    if (barra) barra.style.width = `${((i + 1) / lista.length) * 100}%`;
    if (foco) lista[i]!.querySelector<HTMLElement>('input:not([type=hidden]),select')?.focus();
  };
  const valido = (fs: HTMLFieldSetElement) =>
    [...fs.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input,select,textarea')].every((c) => c.reportValidity());

  for (const b of form.querySelectorAll<HTMLButtonElement>('[data-siguiente]'))
    b.addEventListener('click', () => {
      if (!valido(lista[actual]!)) return;
      window.ebzTrack?.('PasoFormulario', { tipo: form.dataset.lead!, paso: String(actual + 1) });
      ir(actual + 1);
    });
  for (const b of form.querySelectorAll<HTMLButtonElement>('[data-atras]')) b.addEventListener('click', () => ir(actual - 1));
  // Enter en un campo de un paso intermedio avanza en vez de enviar.
  form.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || actual === lista.length - 1 || (e.target as HTMLElement).tagName === 'TEXTAREA') return;
    e.preventDefault();
    lista[actual]!.querySelector<HTMLButtonElement>('[data-siguiente]')?.click();
  });
  ir(0, false);
}

for (const form of document.querySelectorAll<HTMLFormElement>('form[data-lead]')) {
  pasos(form);

  const intencion = form.querySelector<HTMLSelectElement>('select[name=intencion]');
  const ayuda = form.querySelector<HTMLElement>('[data-ayuda-intencion]');
  intencion?.addEventListener('change', () => ayuda && (ayuda.textContent = AYUDA_INTENCION[intencion.value] ?? ''));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const tipo = form.dataset.lead!;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const btn = form.querySelector<HTMLButtonElement>('[type=submit]');
    btn?.setAttribute('disabled', '');
    btn?.classList.add('ebz-btn--loading');

    if (d.patente) d.patente = normalizarPatente(d.patente);
    if (d.marca === 'Otra' && d.marca_otra) d.marca = d.marca_otra.trim();
    delete d.marca_otra;
    // Prueba del consentimiento (Ley 21.719): qué aceptó y de qué versión de la política.
    if (d.consentimiento_sensibles) d.consentimiento = [d.consentimiento, d.consentimiento_sensibles].filter(Boolean).join(' · ');
    delete d.consentimiento_sensibles;
    const esBot = Boolean(d.sitio_web); // honeypot: los humanos no lo ven
    delete d.sitio_web;
    if (!esBot) {
      await guardar({ tipo, ...d }, form.dataset.sheets || '');
      // Datos para que Meta reconozca a la persona (se cifran en el servidor, ver api/meta.ts).
      window.ebzTrack?.('Lead', { tipo }, { telefono: d.whatsapp || d.telefono, email: d.email, nombre: d.nombre, comuna: d.comuna, region: d.region });
    }

    const wa = `https://wa.me/${form.dataset.wa}?text=${encodeURIComponent((TEXTOS[tipo] ?? TEXTOS.contacto!)(d))}`;
    const gracias = form.querySelector<HTMLElement>('[data-gracias]');
    form.querySelector<HTMLElement>('[data-campos]')?.setAttribute('hidden', '');
    form.querySelector<HTMLElement>('.lead__progreso')?.setAttribute('hidden', '');
    const txt = form.querySelector<HTMLElement>('[data-paso-txt]');
    if (txt) txt.textContent = '';
    if (gracias) {
      gracias.hidden = false;
      gracias.querySelector<HTMLAnchorElement>('[data-gracias-wa]')?.setAttribute('href', wa);
      gracias.querySelector<HTMLElement>('[tabindex="-1"]')?.focus();
    }
  });
}

export {};
