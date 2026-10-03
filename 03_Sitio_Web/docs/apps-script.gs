/**
 * EBENEZER: recibe los contactos del sitio y los guarda en la planilla.
 * Pegar en Extensiones › Apps Script de la planilla de Google (ver docs/google-sheets.md).
 *
 * Cada tipo de contacto va a su propia pestaña:
 *   Vendedores  → formularios "Tasa tu auto" (consignación)
 *   Compradores → "¿Buscas otro auto? Te lo conseguimos"
 *   Contacto    → página de contacto
 * La columna "estado" queda vacía para que el equipo la vaya llenando
 * (nuevo, contactado, tasado, consignado, descartado…).
 */
const PESTANAS = { venta: 'Vendedores', compra: 'Compradores', contacto: 'Contacto' };
const COLUMNAS = [
  'fecha', 'estado', 'nombre', 'telefono', 'email', 'comuna',
  'patente', 'marca_modelo', 'anio', 'km',
  'busca', 'presupuesto', 'motivo', 'mensaje',
  'pagina', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid',
];

function doPost(e) {
  const p = (e && e.parameter) || {};
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const nombre = PESTANAS[p.tipo] || 'Contacto';
  const hoja = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(COLUMNAS);
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, COLUMNAS.length).setFontWeight('bold');
  }
  const fila = COLUMNAS.map((c) => {
    if (c === 'fecha') return p.fecha ? new Date(p.fecha) : new Date();
    if (c === 'estado') return 'nuevo';
    const v = String(p[c] || '').slice(0, 500);
    // Evita que Sheets interprete "=..." como fórmula
    return /^[=+\-@]/.test(v) && c !== 'telefono' ? "'" + v : v;
  });
  hoja.appendRow(fila);

  // Aviso por correo opcional: descomenta y pon tu correo.
  // MailApp.sendEmail('tu@correo.cl', `Nuevo contacto (${nombre}): ${p.nombre}`, JSON.stringify(p, null, 2));

  return ContentService.createTextOutput('ok');
}
