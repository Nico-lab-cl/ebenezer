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

| Pestaña | Formulario | Columnas clave |
|---|---|---|
| Vendedores | "Tasa tu auto" (portada, /vender-mi-auto, /tasacion) | patente, marca y modelo, año, km, nombre, WhatsApp, comuna |
| Compradores | "¿Buscas otro auto? Te lo conseguimos" | qué busca, presupuesto, nombre, WhatsApp |
| Contacto | Página de contacto | motivo, mensaje, nombre, teléfono, email |

En todas: fecha, **estado** (empieza en "nuevo", para que el equipo la vaya
cambiando), página y origen de la visita (`utm_source`, `utm_campaign`,
`fbclid`, `gclid`…). Con eso sabes qué anuncio trajo cada auto.

## Si cambias el script

Cada cambio en el código necesita **Implementar › Gestionar implementaciones ›
Editar › Versión nueva**. La URL `/exec` se mantiene.

## Si algún día pasan a un CRM

El sitio sólo hace un POST con los campos de arriba (`src/scripts/leads.ts`).
Basta con cambiar `sheetsUrl` por la URL de un webhook (n8n, Make, el CRM) que
acepte `application/x-www-form-urlencoded`.
