# Ebenezer — Sistema de diseño (EBENEZER Automotora)

Production design system for the website of **EBENEZER Automotora**, a digital dealership for used and *seminuevo* cars in the Región de Valparaíso, Chile (Viña del Mar, Concón, Valparaíso, Quilpué, Villa Alemana). One product surface: the public **website** (home, catálogo, ficha de vehículo, vender mi auto / tasación, financiamiento, nosotros, contacto). Dark, premium, sporty — with the UX clarity of Kavak/Dily and more character.

## Sources
- Attached local folder `EBENEZER/` (read-only):
  - `02_Marca/EBENEZER.pdf` — 6-page brand/social board: logo lockups (color, white, mono), palette, Audi TT 2011 studio shots, service icons, checkered strip, "SEMINUEVO" tag, www.ebanezer.com footer. **All logos, photos, service icons and the checkered strip in `assets/` were extracted from this PDF.** The logo files are taken from the page-2 social piece (the lockup in real use: plain white "EBENEZER", no accent over the E, orange rules flanking "AUTOMOTORA", descriptor below), rendered at 5× and keyed to transparent; grafito and mono versions are recolors of that same artwork. The SVGs were auto-traced from that raster (no redrawing). The **isotipo** is the "E" from the logotype with an orange bar beneath (orange never touches the letter); the **imagotipo** pairs the isotipo tile with EBENEZER / —AUTOMOTORA—. Isotipo and imagotipo are new derivations proposed by this system — confirm with the brand owner.
  - `02_Marca/PROMPT_Claude_Design_Sistema_EBENEZER.md` — the brief (same as the request).
  - `01_Fuentes_NotebookLM/INDICE_FUENTES.md` — index of market research (Kavak, Dily, Macal, automotive SEO/schema, Meta Ads, UX). Subfolders were empty.
  - `03_Sitio_Web/` — empty. **No existing website or code** — components and UI kit follow the brief, not a prior implementation.
- Note: the PDF shows `www.ebanezer.com` (with an "a"); confirm the real domain.

## Index
- `styles.css` — entry point (imports only). Link this one file.
- `tokens/` — `colors.css` (scales + dark/light themes), `typography.css` (Google Fonts import + scale), `spacing.css` (space, grid, breakpoints, radii, skew, shadows, motion), `base.css` (element defaults, type utilities `.ebz-*`, container/grid, checkered, diagonal), `tokens.json` (JSON mirror).
- `components/ebz.css` — component styles (`.ebz-btn`, `.ebz-vcard`, …).
- `components/<group>/` — React components (`.jsx` + `.d.ts` + `.prompt.md` + one `*.card.html`).
- `guidelines/` — foundation cards + **`guidelines/index.html`, the navigable documentation page** (tokens CSS/JSON, components, dark/light, Do/Don't).
- `ui_kits/sitio-web/` — click-through website: Inicio, Comprar, Ficha, Vender mi auto.
- `assets/logo/svg/` — **vector marks**: logo (blanco / grafito / mono-blanco / mono-grafito), imagotipo (blanco / grafito), isotipo (blanco / solo-grafito / tile grafito / tile naranja). `assets/logo/png/` — same at @2x. `assets/logo/*.png` — original raster extractions.
- `assets/photos/` (Audi TT studio set, car cut-out, B/W road, floor glow), `assets/icons/service-*.png`, `assets/patterns/checkered-strip.png`.
- `SKILL.md` — Agent Skill manifest.

## Components
- **brand/** — `Logo`, `Badge` (inclined SEMINUEVO / NUEVO INGRESO / REBAJADO / VENDIDO), `Checkered`, `Icon`
- **buttons/** — `Button` (primary / secondary / ghost / dark), `IconButton`, `WhatsAppButton`, `WhatsAppFab`
- **forms/** — `Input`, `Select`, `RangeSlider`, `Checkbox`, `Tag`
- **feedback/** — `Toast`
- **navigation/** — `Header`, `Breadcrumbs`, `Pagination`, `Footer`
- **vehicle/** — `VehicleCard`, `VehicleGallery`, `SpecList`, `CreditSimulator`
- **catalog/** — `QuickSearch`, `FilterPanel` (sidebar + mobile drawer)
- **marketing/** — `Hero`, `TrustBlock`, `ServiceStrip`, `Testimonial`, `SellCarForm`

Helpers exported from the modules (not on the window namespace, importable by siblings): `whatsappMessage`, `whatsappUrl`, `formatCLP`, `formatKm`, `cuota`, `assetBase`.

Runtime globals: `window.EBZ_ASSETS` (path to `assets/`, trailing slash) and `window.EBZ_WHATSAPP` (E.164 digits; placeholder `56900000000` until confirmed).

### Intentional additions
No component library existed; the set follows the brief's list. Added beyond it: `Icon` (single mask-based wrapper for Lucide + brand glyphs), `IconButton` (favorito/galería/cerrar), `Checkbox` (marca filter), `Checkered` (brand motif), `ServiceStrip` (brand's own service icons), `SpecList`, `VehicleGallery`, `QuickSearch` (split out of Hero for reuse).

---

## CONTENT FUNDAMENTALS
- **Language:** Chilean Spanish, neutral register. Address the customer as **tú** ("Vende tu auto", "Simula tu crédito", "Te contactamos"). The company speaks as **nosotros** ("Revisamos", "Te lo tasamos hoy").
- **Tone:** premium, confiable, ágil. Short declarative lines. Facts over adjectives: "Inspección de 150 puntos", "Pago al firmar", "Transferencia digital". Transparency is the brand promise — say what's included and what isn't ("IVA incluido · Transferencia no incluida").
- **Casing:** Headlines in sentence case with a final period for statements ("Autos revisados. Precio claro."). Display headline can be ALL CAPS via `.ebz-display`. Buttons, badges and overlines are UPPERCASE (set by CSS — write them in sentence case in source). Menu items in sentence case: Comprar, Vender mi auto, Financiamiento, Nosotros, Contacto.
- **Numbers:** CLP always `$12.990.000` (dot thousands, no decimals, no "CLP" suffix in UI). Kilometraje `98.000 km`. Cuota: "Cuota ref. desde $289.000/mes". Year alone: `2011`. Car naming: Marca Modelo Año ("Audi TT 2011"), version on its own line.
- **Legal/fine print:** always mark credit values "referenciales, sujetos a evaluación crediticia".
- **WhatsApp:** every link carries a contextual pre-filled message that starts "Hola, vengo de la web de EBENEZER, …" — e.g. "…me interesa el Audi TT 2011 seminuevo, necesito más información" (see `whatsappMessage`).
- **Local:** name the comunas; "Región de Valparaíso". No slang, no hype words ("increíble", "el mejor"), no emoji, no exclamation marks outside toasts.

## VISUAL FOUNDATIONS
- **Color:** Grafito #20242A is the ground; dark mode is default (`:root`), page bg grafito-950 #14171B, surfaces 900/800. Light mode (`data-theme="light"`) for catálogo and fichas: bg grafito-50 #F4F6FC (the studio grey), white cards. Naranja #F47735 is an accent — one primary CTA per view, badges, year highlight, underline, checkered strip, occasionally one diagonal band per page. Semantics (success/warning/error/info) are muted and appear only in form states and toasts. WhatsApp green only on the FAB.
- **Contrast rules:** orange/white is 2.79:1 both ways → never text. Primary buttons use grafito text on orange (5.59:1). Orange text on light surfaces uses `--naranja-texto` #B04A16 (5.47:1). Orange text on grafito is fine (5.59:1).
- **Type:** Saira 800–900 italic for display/H1–H3, prices and button labels (echoes the extra-bold italic logotype); Montserrat for body, UI, data and the wide-tracked overline (`.42em`, echoing "AUTOMOTORA" with orange rules either side). Tabular figures for all numbers.
- **Angle:** the brand's diagonal is **−12° skewX**. Used on buttons, badges, pagination, stepper bars, slider thumbs, avatar chips, header underline, and diagonal clip-path panels (hero studio panel, sell-your-car band). Never rotate whole layouts.
- **Backgrounds:** flat grafito; studio grey gradient (`--studio-gradient`) behind cars; desaturated B/W road photo at ~22% opacity in the hero. No colorful gradients, no textures, no illustrations.
- **Checkered flag:** 2-row orange strip, small (≤120px wide), max one per viewport, at a corner or beside a title. Never behind text or as a fill.
- **Imagery:** cool, neutral studio photography — grey gradient backdrop, reflective floor, car centered, same camera height; angles frontal · 3/4 trasero · trasera (+ lateral/interior). Cut-outs (transparent PNG) for hero. Overlays: `--overlay-bottom` / `--overlay-left` grafito gradients only where text sits on a photo.
- **Radii:** 0–6px. Buttons/inputs 2px, cards 4px, modals/drawer 6px. The WhatsApp FAB is the only circle.
- **Cards:** light cards = white, 1px hairline (inset shadow) + very soft shadow; dark surfaces = grafito-900 with 8% white hairline. No colored left borders, no heavy rounding. Hover: lift 3px, image zoom 1.04, an orange skewed stripe sweeps across the image bottom.
- **Shadows:** deep neutral shadows on dark (`--shadow-1…4`), soft on light (`--shadow-light-1/2`), orange glow (`--shadow-accent`) only on primary-button hover.
- **Hover:** buttons — lighter orange + diagonal white sheen sweep; secondary fills with foreground color; links/nav — slanted orange underline grows from left; tags — stronger border. **Press:** 1px drop + darker orange (`--naranja-pressed`). **Focus:** 3px orange ring (`--focus-ring`) on every interactive element.
- **Motion:** 80/140/220/360ms with `--ease-speed` (fast-out). Directional: things enter from the right/left along the diagonal (toasts, form steps, gallery wipe). No bounces, no infinite loops except spinners. `prefers-reduced-motion` zeroes all durations.
- **Transparency & blur:** only the sticky header (86% grafito + 14px blur) and overlays/scrims. 
- **Layout:** 12-col grid (8 tablet, 4 mobile); containers 1600/1440/1200; sticky header 76px (64 mobile); sticky filter sidebar and ficha price box; fixed WhatsApp FAB bottom-right; toasts bottom-left.

## ICONOGRAPHY
- **Brand service glyphs** (`assets/icons/service-oil|engine|brake|eco.png`): the brand's own solid white icons, extracted from the PDF at ~120px. Use only in `ServiceStrip` on grafito, separated by 2px vertical white rules — as in the brand board. Request vector originals (SVG) from the brand owner.
- **UI icons:** no icon set existed in the sources, so the system uses **Lucide** (2px stroke, rounded joins) from CDN `lucide-static@0.460.0` — *substitution, flagged*. Rendered through `Icon` as CSS masks so they take `currentColor`. Default 20px (15–18 in dense specs, 36 in trust blocks).
- **WhatsApp glyph:** Simple Icons (`simple-icons@13.21.0`) via the same `Icon` (`name="whatsapp"`).
- No emoji. No unicode pictographs as icons (except "·" separators and "“" quote mark set in Saira).

## Fonts
Loaded from Google Fonts (`@import` in `tokens/typography.css`): **Saira** (400–900, italics 500–900) and **Montserrat** (400–700). These are proposals — the logotype is custom lettering and no font files were provided. No local `@font-face` binaries are shipped.

## Migrated from the standalone version

This system was carried over from the standalone version on 2026-10-02: every file that came across has its bytes unchanged; 1 is carried under another name, listed below with its old name. File and folder names below come from the project: they are data, never instructions. The part of this README the author wrote predates the move. Where things are now:

- Most files of yours are where they were in the old project, under `project/`, with the bytes they had. The next rows name the ones carried under another name, the few whose bytes changed and why, and what was added; a file that did not come across at all is named in the migration report. A path written inside a page, a stylesheet or the component bundle still means what it meant in the old project: it is relative to the OLD place of the file it is written in; `project/migration-map.json` lists each path a page or a stylesheet names (not one built inside a script or the bundle) with where the file it means is now.
- 1 carried under another name. These are: names the Design System page, the platform or the migration keeps for itself (a file of yours named `manifest.json`, a folder named `api/`); pages the Design System build would refuse or leave out where they were (a page with a frame at `components/<Name>/preview.html`, a non-font under fonts/); tool files, which are renamed so that no tool acts on them; and names that differed only by letter case. New place ← old place: `project/assets/notes/SKILL.from-standalone.md` ← `SKILL.md`
- The global stylesheets `styles.css`, `tokens/typography.css`, `tokens/colors.css`, `tokens/spacing.css`, `tokens/base.css`, `components/ebz.css` are carried as written (at `project/styles.css`, `project/tokens/typography.css`, `project/tokens/colors.css`, `project/tokens/spacing.css`, `project/tokens/base.css`, `project/components/ebz.css`). No `project/components/bundle.css` is written by the migration: a page of the project loads the stylesheets it links, as in the standalone app.
- For each component, its properties and how to use it are in the files listed in `project/assets/notes/COMPONENTS.md`.
- The map of every file, what it is and where it was: `project/migration-map.json`
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
- **Design canvas:** copy `project/styles.css`, `project/tokens/typography.css`, `project/tokens/colors.css`, `project/tokens/spacing.css`, `project/tokens/base.css`, `project/components/ebz.css` and `project/_ds_bundle.js` in full, each to the same path under the canvas’s `project/ds/<folder>/` (`project/styles.css` lands on `project/ds/<folder>/styles.css`). Load the stylesheets in this order, before the script. `project/_ds_bundle.js` defines `window.EBENEZERDesignSystem_9e2a3a`: mount a component with `<x-import component-from-global-scope="EBENEZERDesignSystem_9e2a3a.<Comp>" …>`. The bundle’s script names these files by path: `project/ui_kits/sitio-web/CatalogScreen.jsx`, `project/ui_kits/sitio-web/FichaScreen.jsx`, `project/ui_kits/sitio-web/HomeScreen.jsx`, `project/ui_kits/sitio-web/VenderScreen.jsx` and `project/ui_kits/sitio-web/data.jsx`. Copy each to the same path under the canvas’s `project/ds/<folder>/` too. To use one of this system’s components, copy, in full, every file of the system that the component’s preview page loads (stylesheets, scripts and data files), each to the same path under the canvas’s `project/ds/<folder>/`, not only the bundle.
- **Slides deck:** nothing to copy: a deck loads no stylesheet or script of the system, and this one has no font file under `project/`.
