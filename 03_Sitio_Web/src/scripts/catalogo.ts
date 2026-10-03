/* Filtros del catálogo, del lado del navegador.

   Todas las tarjetas ya vienen en el HTML (bueno para SEO y funciona sin JS);
   esto sólo las oculta, ordena y pagina. El estado vive en la URL
   (?marca=Audi&transmision=Manual…), así el buscador de la portada, el botón
   "atrás" y los enlaces compartidos llevan al mismo resultado. */

const POR_PAGINA = 12;
const miles = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const fmt = (f: string, n: number) => (f === 'clp' ? '$' + miles(n) : f === 'km' ? miles(n) + ' km' : String(n));

const form = document.querySelector<HTMLFormElement>('[data-filtros]')!;
const grilla = document.querySelector<HTMLElement>('[data-grilla]')!;
const tarjetas = [...grilla.querySelectorAll<HTMLElement>('[data-auto]')];
const orden = document.querySelector<HTMLSelectElement>('[data-orden]')!;
const activos = document.querySelector<HTMLElement>('[data-activos]')!;
const pag = document.querySelector<HTMLElement>('[data-pag]')!;
const vacio = document.querySelector<HTMLElement>('[data-vacio]')!;
const lado = document.getElementById('filtros')!;
let pagina = 1;
let etiqueta = '';

const rangos = [...form.querySelectorAll<HTMLElement>('[data-rango]')].map((el) => {
  const min = el.querySelector<HTMLInputElement>('[data-min]')!;
  const max = el.querySelector<HTMLInputElement>('[data-max]')!;
  const fill = el.querySelector<HTMLElement>('.ebz-range__fill')!;
  const f = el.dataset.formato!;
  const lo = Number(min.min), hi = Number(min.max);
  const pintar = () => {
    if (Number(min.value) > Number(max.value)) [min.value, max.value] = [max.value, min.value];
    const pct = (v: number) => (hi === lo ? 0 : ((v - lo) / (hi - lo)) * 100);
    fill.style.left = pct(Number(min.value)) + '%';
    fill.style.right = 100 - pct(Number(max.value)) + '%';
    el.querySelector('[data-vmin]')!.textContent = fmt(f, Number(min.value));
    el.querySelector('[data-vmax]')!.textContent = fmt(f, Number(max.value));
  };
  return { nombre: el.dataset.rango!, min, max, lo, hi, f, pintar };
});

const marcados = (n: string) => [...form.querySelectorAll<HTMLInputElement>(`[name=${n}]:checked`)].map((i) => i.value);

function leerUrl() {
  const q = new URLSearchParams(location.search);
  for (const n of ['marca', 'transmision', 'combustible']) {
    const vals = q.getAll(n);
    for (const i of form.querySelectorAll<HTMLInputElement>(`[name=${n}]`)) i.checked = vals.includes(i.value);
  }
  // Desde el buscador de la portada: ?desde=2018&precio=8000000-12000000
  const r = Object.fromEntries(rangos.map((x) => [x.nombre, x]));
  const set = (x: (typeof rangos)[number] | undefined, a?: string | null, b?: string | null) => {
    if (!x) return;
    x.min.value = String(Math.max(x.lo, Number(a ?? x.lo)));
    x.max.value = String(Math.min(x.hi, Number(b ?? x.hi)));
  };
  const precio = q.get('precio')?.split('-');
  set(r.precio, precio?.[0], precio?.[1]);
  set(r.anio, q.get('desde') ?? q.get('anioMin'), q.get('anioMax'));
  set(r.km, null, q.get('kmMax'));
  orden.value = q.get('orden') || 'recientes';
  etiqueta = q.get('etiqueta') || '';
  modelo = q.get('modelo') || '';
  pagina = Number(q.get('pagina')) || 1;
}
let modelo = '';

function escribirUrl() {
  const q = new URLSearchParams();
  for (const n of ['marca', 'transmision', 'combustible']) for (const v of marcados(n)) q.append(n, v);
  for (const x of rangos) {
    const a = Number(x.min.value), b = Number(x.max.value);
    if (x.nombre === 'precio' && (a > x.lo || b < x.hi)) q.set('precio', `${a}-${b}`);
    if (x.nombre === 'anio') { if (a > x.lo) q.set('anioMin', String(a)); if (b < x.hi) q.set('anioMax', String(b)); }
    if (x.nombre === 'km' && b < x.hi) q.set('kmMax', String(b));
  }
  if (modelo) q.set('modelo', modelo);
  if (etiqueta) q.set('etiqueta', etiqueta);
  if (orden.value !== 'recientes') q.set('orden', orden.value);
  if (pagina > 1) q.set('pagina', String(pagina));
  const s = q.toString();
  history.replaceState(null, '', location.pathname + (s ? '?' + s : ''));
}

function chip(texto: string, quitar: () => void) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'ebz-tag';
  b.innerHTML = `<span></span><span class="ebz-tag__x" aria-hidden="true">✕</span>`;
  b.firstElementChild!.textContent = texto;
  b.setAttribute('aria-label', `Quitar filtro ${texto}`);
  b.addEventListener('click', () => { quitar(); pagina = 1; aplicar(); });
  activos.append(b);
}

function aplicar() {
  for (const x of rangos) x.pintar();
  const m = marcados('marca'), t = marcados('transmision'), c = marcados('combustible');
  const r = Object.fromEntries(rangos.map((x) => [x.nombre, [Number(x.min.value), Number(x.max.value)]]));
  const pasa = (el: HTMLElement) => {
    const d = el.dataset;
    const n = (k: string) => Number(d[k]);
    return (!m.length || m.includes(d.marca!)) &&
      (!modelo || d.modelo === modelo) &&
      (!t.length || t.includes(d.transmision!)) &&
      (!c.length || c.includes(d.combustible!)) &&
      (!etiqueta || d.etiqueta === etiqueta) &&
      n('precio') >= r.precio![0]! && n('precio') <= r.precio![1]! &&
      n('anio') >= r.anio![0]! && n('anio') <= r.anio![1]! &&
      n('km') >= r.km![0]! && n('km') <= r.km![1]!;
  };
  const [campo, dir] = orden.value === 'recientes' ? ['ingreso', -1] : [orden.value.split('-')[0]!, orden.value.endsWith('desc') ? -1 : 1];
  const ok = tarjetas.filter(pasa).sort((a, b) => (Number(a.dataset[campo!]) - Number(b.dataset[campo!])) * (dir as number));
  const paginas = Math.max(1, Math.ceil(ok.length / POR_PAGINA));
  pagina = Math.min(pagina, paginas);
  const visibles = new Set(ok.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA));
  for (const el of tarjetas) el.hidden = !visibles.has(el);
  for (const el of ok) grilla.append(el); // reordena en el DOM (lectura y tabulación en orden)
  vacio.hidden = ok.length > 0;
  const total = `${ok.length} ${ok.length === 1 ? 'auto' : 'autos'}`;
  document.querySelector('[data-total]')!.textContent = total;
  document.querySelector('[data-total-btn]')!.textContent = String(ok.length);

  activos.innerHTML = '';
  for (const n of ['marca', 'transmision', 'combustible'])
    for (const i of form.querySelectorAll<HTMLInputElement>(`[name=${n}]:checked`)) chip(i.value, () => (i.checked = false));
  if (modelo) chip(modelo, () => (modelo = ''));
  if (etiqueta) chip(etiqueta[0]!.toUpperCase() + etiqueta.slice(1), () => (etiqueta = ''));
  for (const x of rangos)
    if (Number(x.min.value) > x.lo || Number(x.max.value) < x.hi)
      chip(`${fmt(x.f, Number(x.min.value))} – ${fmt(x.f, Number(x.max.value))}`, () => { x.min.value = String(x.lo); x.max.value = String(x.hi); });

  pag.innerHTML = '';
  if (paginas > 1) {
    const btn = (label: string, n: number, extra: Record<string, string> = {}) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ebz-pag__btn';
      b.innerHTML = `<span>${label}</span>`;
      for (const [k, v] of Object.entries(extra)) b.setAttribute(k, v);
      if (n === pagina && !extra['aria-label']) b.setAttribute('aria-current', 'page');
      if (n < 1 || n > paginas) b.disabled = true;
      b.addEventListener('click', () => { pagina = n; aplicar(); grilla.scrollIntoView({ behavior: 'smooth' }); });
      pag.append(b);
    };
    btn('‹', pagina - 1, { 'aria-label': 'Anterior' });
    for (let k = 1; k <= paginas; k++) btn(String(k), k);
    btn('›', pagina + 1, { 'aria-label': 'Siguiente' });
  }
  escribirUrl();
}

form.addEventListener('input', () => { pagina = 1; aplicar(); });
form.addEventListener('reset', () => setTimeout(() => { modelo = ''; etiqueta = ''; pagina = 1; aplicar(); }));
form.addEventListener('submit', (e) => e.preventDefault());
orden.addEventListener('change', aplicar);

// Cajón de filtros en móvil
const scrim = document.createElement('div');
scrim.className = 'ebz-drawer-scrim';
scrim.hidden = true;
document.body.append(scrim);
const abrir = (si: boolean) => { lado.toggleAttribute('data-open', si); scrim.hidden = !si; document.body.style.overflow = si ? 'hidden' : ''; };
document.querySelector('[data-abrir-filtros]')?.addEventListener('click', () => abrir(true));
document.querySelector('[data-cerrar-filtros]')?.addEventListener('click', () => abrir(false));
scrim.addEventListener('click', () => abrir(false));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lado.hasAttribute('data-open')) abrir(false); });

leerUrl();
aplicar();

export {}; // módulo: sus variables no chocan con las de otros scripts
