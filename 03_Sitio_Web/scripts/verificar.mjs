/* npm run verificar — lista lo que falta antes de publicar.

   El sitio nunca inventa datos: lo que no entregó el cliente queda entre
   corchetes, por ejemplo [Dirección por confirmar]. Este script los encuentra,
   junto con el WhatsApp de prueba y los autos de ejemplo publicados.
   Sale con código 1 si hay pendientes, para poder usarlo en CI. */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const raiz = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const pendientes = [];

function recorrer(dir, ext) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) recorrer(p, ext);
    else if (ext.some((e) => p.endsWith(e))) revisar(p);
  }
}

// Corchetes con texto en castellano: [Nombre], [N], [+56 9 …]. Ignora código como [0] o arr[i].
const MARCADOR = /\[(?:N|[A-ZÁÉÍÓÚ+][^\]\n]{2,80})\]/g;

function revisar(p) {
  const texto = readFileSync(p, 'utf8');
  texto.split('\n').forEach((linea, i) => {
    if (/^\s*(\/\/|\/\*|\*)/.test(linea)) return; // comentarios
    for (const m of linea.replace(/pattern="[^"]*"/g, "").matchAll(MARCADOR)) pendientes.push(`${relative(raiz, p)}:${i + 1}  ${m[0]}`);
  });
}

recorrer(join(raiz, 'src/content'), ['.json']);
recorrer(join(raiz, 'src/pages'), ['.astro']);
recorrer(join(raiz, 'src/components'), ['.astro']);

const ajustes = JSON.parse(readFileSync(join(raiz, 'src/content/ajustes.json'), 'utf8'));
if (/^569?0+$/.test(String(ajustes.whatsapp))) pendientes.push('src/content/ajustes.json  whatsapp es el número de prueba 56900000000');
if (!ajustes.sheetsUrl) pendientes.push('src/content/ajustes.json  sheetsUrl vacío: los contactos no se guardan en Google Sheets (docs/google-sheets.md)');
if (!ajustes.metaPixelId) pendientes.push('src/content/ajustes.json  metaPixelId vacío: los anuncios de Meta no medirán conversiones');
if (!ajustes.ga4Id) pendientes.push('src/content/ajustes.json  ga4Id vacío: sin Google Analytics');
if (!String(ajustes.dominio).startsWith('https://')) pendientes.push('src/content/ajustes.json  dominio debe empezar con https://');

const dirAutos = join(raiz, 'src/content/vehiculos');
for (const n of readdirSync(dirAutos)) {
  const v = JSON.parse(readFileSync(join(dirAutos, n), 'utf8'));
  if (n.startsWith('ejemplo-') && v.publicado) pendientes.push(`src/content/vehiculos/${n}  auto de EJEMPLO marcado como publicado`);
}

if (pendientes.length) {
  console.log(`\n${pendientes.length} pendientes antes de publicar:\n`);
  for (const p of pendientes) console.log('  · ' + p);
  console.log('');
  process.exit(1);
}
console.log('Sin pendientes: listo para publicar.');
