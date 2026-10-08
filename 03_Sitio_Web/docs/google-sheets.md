# Contactos del sitio → Google Sheets

Toma unos 5 minutos. Todo se hace con la cuenta de Google de la automotora.

1. Crea una planilla nueva en Google Sheets, por ejemplo **"EBENEZER · Contactos web"**.
2. En la planilla: **Extensiones › Apps Script**. Borra lo que aparece, pega el
   contenido de [`apps-script.gs`](apps-script.gs) y guarda.
3. **Implementar › Nueva implementación**, tipo **Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
4. Autoriza los permisos (Google advierte que la app "no está verificada":
   *Configuración avanzada › Ir a…*. Es tu propio script).
5. Copia la **URL de la aplicación web**; termina en `/exec`.
6. Pégala en `/admin` › *Datos de la automotora* › **URL de Google Sheets**
   (o en `src/content/ajustes.json`, campo `sheetsUrl`) y publica.

Prueba: llena el formulario de la portada. En unos segundos aparece una fila
en la pestaña **Vendedores**, con la campaña de origen si llegaste desde un
enlace con `utm_*`.

## Qué se guarda

| Pestaña | Formulario | Columnas propias |
|---|---|---|
| Vendedores | "Vende tu auto" en 3 pasos (portada, /vender-mi-auto, /tasacion) | patente, marca, modelo, año, km, transmisión, intención (consignación o venta directa), precio esperado, urgencia, región, comuna |
| Crédito | Solicitud del simulador (/financiamiento y ficha de cada auto) | auto de interés, precio, pie, plazo y cuota simulados, situación laboral, auto en parte de pago |
| Compradores | "¿Buscas otro auto? Te lo conseguimos" | qué busca, presupuesto |
| Contacto | Página de contacto | motivo, mensaje |

En todas: fecha, **estado** (empieza en "nuevo"), **traido_por** (vacío, lo
llena el equipo), nombre, teléfono, email, **fuente** (pagado, orgánico o
referido, deducida de las utm), **anuncio** (`utm_content`), página y el origen
completo de la visita (`utm_*`, `fbclid`, `gclid`). Son columnas del tracker de
ventas de Patricio, para poder cruzar ambas planillas.

La columna **consentimiento** guarda qué aceptó la persona y la versión de la
política de privacidad (y, en crédito, la autorización expresa de datos
socioeconómicos). Es la prueba que pide la Ley 21.719: no la borres.

Si el código agrega columnas nuevas, ejecuta `configurar()` desde el editor: en
pestañas con contactos inserta cada columna que falta en su lugar, sin mover
los datos que ya existen.

## Si cambias el script

Cada cambio en el código necesita **Implementar › Gestionar implementaciones ›
Editar › Versión nueva**. La URL `/exec` se mantiene.

## Si después pasan a n8n, un CRM o Postgres

El sitio sólo hace un POST `application/x-www-form-urlencoded` con los campos
de arriba (`src/scripts/leads.ts`). Para cambiar de destino basta con poner en
`sheetsUrl` la URL de un webhook de n8n (nodo *Webhook*, método POST) y armar
el flujo ahí: Google Sheets, aviso por WhatsApp o correo, Postgres, etc. El
campo `tipo` (`venta`, `credito`, `compra`, `contacto`) indica de qué formulario viene.
