# EBENEZER Automotora: sitio web

Automotora de autos usados en **consignación** en la Región de Valparaíso
(Viña del Mar, Concón, Valparaíso, Quilpué, Villa Alemana).

## Las dos vías del sitio

1. **Vende tu auto con nosotros** (vía principal): el dueño deja su auto en
   consignación; EBENEZER lo fotografía, lo promociona con anuncios pagados y
   atiende a los compradores. Formulario de tasación en la portada, en
   `/vender-mi-auto` y en `/tasacion` (página de anuncios, sin menú, noindex).
2. **Autos disponibles** (`#autos` en la portada y `/comprar`): con 1 o 2 autos
   se muestran en vitrina grande; filtros y paginación aparecen solos desde 8
   autos. Siempre cierra con "¿Buscas otro? Te lo conseguimos" (encargo).

Todos los formularios guardan en **Google Sheets** (pestañas Vendedores,
Compradores, Contacto) con el origen de campaña (utm_*, fbclid, gclid), disparan
`Lead` en Meta Pixel / `generate_lead` en GA4 y ofrecen seguir por WhatsApp.
Configuración: [docs/google-sheets.md](docs/google-sheets.md).

### Anuncios

URL de destino: `https://<dominio>/tasacion/?utm_source=facebook&utm_medium=paid&utm_campaign=<nombre>`.
Con `metaPixelId` y `ga4Id` cargados en /admin, cada formulario enviado cuenta
como conversión **Lead** y cada clic a WhatsApp como **Contact**.

**Astro 5 estático · TypeScript · Keystatic (CMS) · Cloudflare Workers.**
Es el mismo stack que Conecta Médica, que ya está en producción, adaptado a
un inventario de autos.

```bash
npm install
npm run dev          # http://localhost:4321 · CMS en /admin
npm run build        # genera dist/
npm run verificar    # lista los datos pendientes antes de publicar
npm run deploy       # build + wrangler deploy (requiere login en Cloudflare)
```

---

## Por qué este stack

| Pieza | Elección | Motivo |
|---|---|---|
| Framework | **Astro 5**, salida estática | Las fichas de autos son contenido: HTML ya renderizado carga rápido y Google lo indexa completo. Unos 10 KB de JS en total, sin framework en el navegador. |
| Estilos | **CSS del design system EBENEZER** (`src/styles/ds/`) | Se copian tal cual los tokens y componentes `.ebz-*`, sin Tailwind ni una segunda fuente de verdad. |
| Inventario | **Keystatic** en `/admin` | El dueño sube autos y fotos desde el navegador. Cada auto es un JSON en el repo y cada guardado es un commit, sin base de datos que mantener ni pagar. |
| Imágenes | `astro:assets` + sharp | Las fotos de estudio pesan 2,5 MB en PNG y salen en WebP de 40 a 120 KB, en varios tamaños. |
| Hosting | **Cloudflare Workers** (assets estáticos) | Plan gratuito, CDN en Chile, SSL. Sólo `/keystatic` corre como Worker. |
| Contacto | **WhatsApp** con mensaje precargado | Así atiende la automotora. Los formularios (vender, contacto) arman el mensaje y abren WhatsApp, sin servidor. |
| SEO | JSON-LD `AutoDealer` + `Car` + `BreadcrumbList`, sitemap, canónicas, OG | Cada ficha es una página indexable con precio y kilometraje en datos estructurados. |

---

## Mapa

```
src/
  content/
    ajustes.json         datos de la automotora (WhatsApp, dirección, tasa, bloque de confianza)
    vehiculos/*.json     un archivo por auto (editable desde /admin)
    testimonios/*.json   sólo reales; si no hay ninguno, la sección no aparece
  content.config.ts      esquema Zod del inventario: lo que no cumple, no compila
  assets/vehiculos/      fotos de cada auto (se optimizan al construir)
  components/            port a .astro de los componentes del design system
  lib/                   whatsapp, formatos CLP/km, cuota, JSON-LD, íconos
  scripts/               JS del navegador: filtros del catálogo, formulario vender
  pages/                 inicio, comprar, autos/[slug], vender-mi-auto,
                         financiamiento, nosotros, contacto, 404, robots.txt
  styles/ds/             tokens y componentes CSS del design system (no editar a mano)
  styles/sitio.css       sólo layout de páginas
keystatic.config.ts      el CMS, en español y con ayudas por campo
wrangler.jsonc           despliegue en Cloudflare
scripts/verificar.mjs    detecta datos pendientes ([corchetes], WhatsApp de prueba…)
design-system/           referencia del diseño (Claude Design): tokens, componentes,
                         guías y canvas-paginas/ con las 9 pantallas diseñadas
```

## Reglas de la casa

1. **Nada se inventa.** Lo que el cliente no ha entregado queda entre corchetes,
   como `[Dirección por confirmar]`, y `npm run verificar` lo lista. Los testimonios
   sólo aparecen si hay reales publicados.
2. **Borrador en vez de borrar.** Un auto con `publicado: false` se ve en
   `npm run dev` pero no en el sitio publicado.
3. **Todo CTA de WhatsApp lleva mensaje contextual**, que empieza con
   *"Hola, vengo de la web de EBENEZER, …"* (`src/lib/whatsapp.ts`).
4. **El naranja #F47735 nunca va como texto sobre blanco** (contraste 2,79:1).
   Sobre fondos claros se usa `--naranja-texto` #B04A16. Más reglas en
   `design-system/README.md`.
5. **Íconos inline.** Para un ícono nuevo, agrégalo a la lista de `src/lib/iconos.ts`
   (Lucide 0.460, la versión del design system).

---

## Subir a GitHub y publicar en Cloudflare

El repositorio es **esta carpeta** (`03_Sitio_Web`), no `EBENEZER/` completa:
las fuentes de NotebookLM y los PDF de marca no van al sitio.

```bash
git init -b main
git add .
git commit -m "Sitio EBENEZER Automotora"
git remote add origin https://github.com/<usuario>/ebenezer-automotora.git
git push -u origin main
```

Luego en Cloudflare:

1. **Workers & Pages › Create › Import a repository** y elige el repo.
2. Nombre del Worker: `ebenezer-automotora`, el mismo que `name` en `wrangler.jsonc`.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
   Wrangler también construye solo (`build.command`), así que aunque el
   campo del panel quede vacío, el despliegue no se rompe.
4. **Custom domains**: agrega el dominio definitivo y actualiza `dominio` en
   `src/content/ajustes.json`.

Cada push a `main` (incluidos los guardados del CMS) publica solo.

### CMS en producción

En local, `/admin` edita los archivos directamente. Para que el dueño edite
desde la web:

1. Crea un proyecto en [keystatic.cloud](https://keystatic.cloud) y conéctalo al repo de GitHub.
2. En Cloudflare › Settings › Variables, agrega `PUBLIC_KEYSTATIC_PROJECT=equipo/proyecto`
   como variable **de build** y vuelve a desplegar.
3. El dueño entra a `https://<dominio>/admin` con su correo, sin cuenta de GitHub.

### Peso del deploy

`dist/` incluye los PNG originales (unos 15 MB) porque Astro los conserva junto
a las versiones optimizadas. Las páginas sólo enlazan los WebP, así que los
visitantes no los descargan. Si el repo crece mucho, sube las fotos nuevas en
JPG o WebP a 2000 px.

---

## Pendientes antes de publicar

`npm run verificar` da la lista actualizada. Hoy:

- **Consignación**: comisión, plazo de pago al dueño, dónde queda el auto y condiciones de retiro.
- **Google Sheets**: crear la planilla y pegar la URL `/exec` (docs/google-sheets.md).
- **Meta Pixel** y **GA4**: IDs para medir los anuncios.
- **WhatsApp real** (hoy es `56900000000`), teléfono, email, dirección y horario.
- **Dominio**: el PDF de marca dice `www.ebanezer.com` (con "a"). Confirmar.
- **Bloque de confianza**: número de puntos de inspección y condiciones de la garantía.
- **Financiamiento**: con qué financieras trabajan y el plazo de evaluación.
- **Audi TT 2011**: confirmar precio, km, color y dueños (vienen del material de diseño).
- **Nosotros**: historia breve y equipo.
- Testimonios reales con permiso de cada cliente.
- Pedir a la marca los íconos de servicio en SVG (hoy son PNG extraídos del PDF).
