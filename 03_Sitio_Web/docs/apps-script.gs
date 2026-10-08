/**
 * EBENEZER: recibe los contactos del sitio y los guarda en la planilla.
 * Pegar en Extensiones › Apps Script de la planilla de Google (ver docs/google-sheets.md).
 *
 * Cada tipo de contacto va a su propia pestaña, con sus propias columnas:
 *   Vendedores  → "Vende tu auto" (consignación o venta directa)
 *   Crédito     → solicitud del simulador de crédito
 *   Compradores → "¿Buscas otro auto? Te lo conseguimos"
 *   Contacto    → página de contacto
 * "estado" parte en "nuevo" y "traido_por" queda vacío: los llena el equipo.
 * "fuente" (pagado / orgánico / referido) y "anuncio" se deducen de las utm_*.
 */
/** Ejecutar una vez desde el editor: crea las 4 pestañas con sus encabezados. */
function configurar() {
  const l = libro();
  Object.keys(PESTANAS).forEach((tipo) => formatear(prepararHoja(l, tipo), columnasDe(PESTANAS[tipo])));
  const vacia = l.getSheetByName('Hoja 1') || l.getSheetByName('Sheet1');
  if (vacia && vacia.getLastRow() === 0 && l.getSheets().length > 1) l.deleteSheet(vacia);
}

// Si el script se crea desde la planilla (Extensiones › Apps Script) deja esto vacío.
// Si es un proyecto aparte en script.google.com, pega aquí el ID de la planilla
// (lo que va entre /d/ y /edit en su URL).
const PLANILLA_ID = '';
const libro = () => (PLANILLA_ID ? SpreadsheetApp.openById(PLANILLA_ID) : SpreadsheetApp.getActiveSpreadsheet());

const COMUNES_INICIO = ['fecha', 'estado', 'traido_por', 'nombre', 'telefono', 'email'];
const COMUNES_FIN = ['fuente', 'anuncio', 'pagina', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

const PESTANAS = {
  venta: {
    nombre: 'Vendedores',
    columnas: ['patente', 'marca', 'modelo', 'anio', 'km', 'transmision', 'intencion', 'precio_esperado', 'urgencia', 'region', 'comuna'],
  },
  credito: {
    nombre: 'Crédito',
    columnas: ['auto_interes', 'precio_auto', 'pie', 'plazo', 'cuota_simulada', 'situacion_laboral', 'renta', 'parte_de_pago'],
  },
  compra: { nombre: 'Compradores', columnas: ['busca', 'presupuesto'] },
  contacto: { nombre: 'Contacto', columnas: ['motivo', 'mensaje'] },
};

// Valores de la columna "estado" (lista desplegable) en cada pestaña.
const ESTADOS = {
  venta: ['nuevo', 'contactado', 'tasado', 'revisión agendada', 'consignado', 'comprado', 'vendido', 'descartado'],
  credito: ['nuevo', 'contactado', 'en evaluación', 'aprobado', 'rechazado', 'desistió'],
  compra: ['nuevo', 'contactado', 'auto ofrecido', 'cerrado', 'descartado'],
  contacto: ['nuevo', 'respondido', 'cerrado'],
};

// Columnas que se guardan como número (para poder sumar, filtrar y ordenar).
const NUMERICOS = ['anio', 'km', 'precio_esperado', 'precio_auto', 'pie', 'plazo', 'cuota_simulada'];

const FORMATO_FECHA = 'dd-mm-yyyy hh:mm';

const columnasDe = (def) => COMUNES_INICIO.concat(def.columnas, COMUNES_FIN);

function prepararHoja(l, tipo) {
  const def = PESTANAS[tipo];
  const columnas = columnasDe(def);
  const hoja = l.getSheetByName(def.nombre) || l.insertSheet(def.nombre);
  // Escribe el encabezado si la pestaña está vacía, o lo actualiza si todavía no
  // tiene contactos y las columnas cambiaron (p. ej. al agregar un campo nuevo).
  const filas = hoja.getLastRow();
  const encabezado = filas ? hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0].join('|') : '';
  if (filas === 0 || (filas === 1 && encabezado !== columnas.join('|'))) {
    if (hoja.getMaxColumns() < columnas.length) hoja.insertColumnsAfter(hoja.getMaxColumns(), columnas.length - hoja.getMaxColumns());
    hoja.getRange(1, 1, 1, hoja.getMaxColumns()).clearContent();
    hoja.getRange(1, 1, 1, columnas.length).setValues([columnas]);
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, columnas.length).setFontWeight('bold').setBackground('#20242A').setFontColor('#FFFFFF');
    const regla = SpreadsheetApp.newDataValidation().requireValueInList(ESTADOS[tipo], true).setAllowInvalid(true).build();
    hoja.getRange(2, columnas.indexOf('estado') + 1, hoja.getMaxRows() - 1, 1).setDataValidation(regla);
    formatear(hoja, columnas);
  }
  return hoja;
}

// Fecha legible, "anio" y "plazo" sin separador, montos y km con punto de miles.
// configurar() lo vuelve a aplicar a pestañas que ya existen.
function formatear(hoja, columnas) {
  const filas = hoja.getMaxRows() - 1;
  hoja.getRange(2, 1, filas, 1).setNumberFormat(FORMATO_FECHA);
  columnas.forEach((c, i) => {
    if (NUMERICOS.includes(c)) hoja.getRange(2, i + 1, filas, 1).setNumberFormat(c === 'anio' || c === 'plazo' ? '0' : '#,##0');
  });
}

function fuente(p) {
  const medio = String(p.utm_medium || '').toLowerCase();
  if (p.fbclid || p.gclid || /paid|cpc|ppc|ads?$/.test(medio)) return 'pagado';
  if (medio === 'referral') return 'referido';
  return 'orgánico';
}

function doPost(e) {
  const p = (e && e.parameter) || {};
  const tipo = PESTANAS[p.tipo] ? p.tipo : 'contacto';
  const def = PESTANAS[tipo];
  const columnas = columnasDe(def);
  const hoja = prepararHoja(libro(), tipo);
  const calculados = { fuente: fuente(p), anuncio: p.utm_content || '' };
  const fila = columnas.map((c) => {
    if (c === 'fecha') return p.fecha ? new Date(p.fecha) : new Date();
    if (c === 'estado') return 'nuevo';
    const v = String(c in calculados ? calculados[c] : p[c] || '').slice(0, 500);
    // "98.000" o "$3.600.000" → número (Sheets leería el punto de miles como decimal).
    if (NUMERICOS.includes(c) && /\d/.test(v)) return Number(v.replace(/\D/g, ''));
    // Evita que Sheets interprete "=..." o "+56 9..." como fórmula: el apóstrofo lo deja como texto.
    return /^[=+\-@]/.test(v) ? "'" + v : v;
  });
  hoja.appendRow(fila);
  // appendRow pone su propio formato a las fechas: se fija el nuestro en la fila nueva.
  hoja.getRange(hoja.getLastRow(), 1).setNumberFormat(FORMATO_FECHA);

  // Aviso por correo opcional: descomenta y pon el correo de Zoho cuando exista.
  // MailApp.sendEmail('contacto@automotoraebenezer.cl', `Nuevo contacto (${def.nombre}): ${p.nombre}`, JSON.stringify(p, null, 2));

  return ContentService.createTextOutput('ok');
}
