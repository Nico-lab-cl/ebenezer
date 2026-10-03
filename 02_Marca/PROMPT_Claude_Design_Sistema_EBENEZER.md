# Prompt para Claude Design: sistema de diseño EBENEZER Automotora

Crea el sistema de diseño completo para el sitio web de **EBENEZER Automotora**, una automotora digital de compra y venta de autos usados y seminuevos en la Región de Valparaíso, Chile (Viña del Mar, Concón, Valparaíso, Quilpué, Villa Alemana). El sistema se usará después para construir la página web, así que tiene que quedar listo para producción: tokens, componentes y reglas de uso.

## Identidad existente (no cambiar)
- Logotipo: "EBENEZER" en sans-serif extra bold itálica, con tracking ajustado y sensación de velocidad. Debajo va "AUTOMOTORA" en versalitas muy espaciadas, flanqueada por dos líneas naranjas, y el descriptor "Compra y venta de autos".
- Paleta oficial de la marca:
  - Grafito `#20242A`: color principal, fondos oscuros, textos.
  - Naranja `#F47735`: acento, CTAs, etiquetas y destacados.
  - Blanco `#FFFFFF`
- Recursos gráficos que ya usa la marca: patrón de bandera a cuadros naranja (checkered) como detalle; etiquetas en paralelogramo inclinado (como "SEMINUEVO") en naranja con texto blanco itálico bold; fotografía de autos en estudio sobre fondo gris claro degradado con piso reflectante; íconos de línea blancos para servicios (aceite, mecánica, frenos, eco) separados por divisores verticales.

## Lo que necesito que definas

1. **Paleta extendida**, derivada de los 3 colores oficiales sin agregar tonos de otra familia:
   - Escala de grafito/grises de 50 a 950, que incluya el gris frío de estudio fotográfico (aprox. `#F4F6FC` a `#A4A5AD`).
   - Escala del naranja de 50 a 900, con estados hover, pressed y focus.
   - Colores semánticos (éxito, alerta, error, info) que convivan con el naranja sin competir con él.
   - Tokens para modo oscuro, que será el modo principal (premium, con fondos en grafito), y para modo claro en las secciones de catálogo y fichas.
   - Verificación de contraste WCAG AA para cada combinación de texto/fondo, sobre todo naranja sobre blanco y blanco sobre naranja. Si no pasa para texto chico, propón la variante de naranja accesible para texto.
2. **Tipografía**: familia para titulares, idealmente con itálica bold que haga eco del logo, y familia legible para cuerpo y datos técnicos. Ambas desde Google Fonts. Incluye escala tipográfica (display, h1 a h6, body, caption, overline con letter-spacing amplio tipo "AUTOMOTORA") y tratamiento de precios en CLP y datos numéricos (km, año).
3. **Espaciado, grid, radios y sombras**: grid de 12 columnas y breakpoints para 1920×1080, 1600×1024, notebook, tablet y mobile. Los radios deben ser sobrios; el lenguaje de la marca es más angular e inclinado que redondeado.
4. **Componentes clave para una automotora digital**:
   - Header con logo, menú (Comprar, Vender mi auto, Financiamiento, Nosotros, Contacto) y CTA de WhatsApp.
   - Hero con auto en estudio y buscador rápido (marca, modelo, año, precio).
   - Card de vehículo con foto, badge inclinado (SEMINUEVO / NUEVO INGRESO / REBAJADO), marca-modelo-año, km, transmisión, combustible, precio CLP, cuota referencial y CTA.
   - Filtros de catálogo (desktop sidebar y mobile drawer).
   - Ficha de vehículo: galería, specs, simulador de crédito, CTA de WhatsApp y agendar visita o test drive.
   - Bloque de confianza: inspección de puntos, garantía, transferencia digital e informe de antecedentes.
   - Formulario "Vende tu auto / Tasación" en varios pasos.
   - Botones primario (naranja), secundario (outline blanco/grafito) y ghost, tags, inputs, selects, sliders de rango, breadcrumbs, paginación, toasts, testimonios y footer.
   - Botón flotante de WhatsApp. Todos los CTA de WhatsApp llevan un mensaje precargado contextual, por ejemplo: "Hola, vengo de la web de EBENEZER, me interesa el Audi TT 2011 seminuevo, necesito más información".
5. **Íconos e ilustración**: estilo de línea coherente con los íconos de servicios existentes, y uso del patrón checkered y de las diagonales como recurso decorativo, sin abusar.
6. **Fotografía**: reglas para fotos de autos (estudio gris degradado, ángulos frontal, 3/4 trasero y trasera, fondo consistente) y tratamiento de overlays sobre fotos.
7. **Movimiento**: microinteracciones sobrias con sensación de velocidad (transiciones cortas y diagonales), respetando prefers-reduced-motion.

## Tono y sensación
Premium, confiable y ágil. Oscuro y elegante como una marca automotriz de gama media-alta, sin perder cercanía local. Queremos transmitir transparencia (autos revisados, precio claro) frente a los reclamos habituales del mercado de usados. Referencias del rubro: Kavak y Dily en claridad de UX, pero con una estética más deportiva y de mayor carácter.

## Entregables
Documenta el sistema en una página navegable con tokens (en CSS variables y en formato JSON), muestras de cada componente en sus estados, ejemplos en modo oscuro y claro, y una sección de "Do / Don't" de uso del naranja y del logo.
