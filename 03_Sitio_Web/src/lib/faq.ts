import { real } from './datos';

/* Preguntas frecuentes de cada página. Las usan las páginas y el JSON-LD
   FAQPage, para que el texto marcado sea exactamente el que ve el visitante
   (requisito de Google).

   Origen: preguntas que la gente le hace a asistentes de IA (ChatGPT, Gemini,
   Google AI) sobre cada tema, sacadas de Ubersuggest el 8-10-2026, más
   búsquedas de cola larga ("vender mi auto con deuda de TAG", "documentos
   para vender un auto"). Las respuestas usan sólo datos confirmados del
   negocio: comisión, plazos de pago y garantía se conversan por WhatsApp.

   Las respuestas sin definir (entre corchetes) no se muestran ni se marcan:
   aparecen solas cuando se completan. */
export type Pregunta = [pregunta: string, respuesta: string];

const definidas = (lista: [string, string | undefined][]) => lista.filter((p): p is Pregunta => Boolean(real(p[1])));

const UBICACION: Pregunta = [
  '¿Dónde está ubicada EBENEZER Automotora?',
  'Tenemos base en El Tabo, en el litoral central, y atendemos toda la Región de Valparaíso. La tasación parte en línea y coordinamos contigo la revisión, las visitas y la transferencia.',
];
const CONSIGNACION_O_DIRECTA: Pregunta = [
  '¿Me conviene vender en consignación o en venta directa?',
  'En consignación esperamos al comprador mientras sigues usando tu auto, por lo que normalmente recibes un precio más cercano al de mercado. En la venta directa te hacemos una oferta y, si te acomoda, te pagamos el auto sin esperar. En la tasación te mostramos las dos opciones.',
];
const COBRO: Pregunta = [
  '¿Cuánto cobran por vender mi auto?',
  'Depende de tu auto y de la modalidad que elijas. Te lo explicamos por WhatsApp junto con la tasación, sin compromiso.',
];
const CREDITO_DIRECTO: Pregunta = [
  '¿Qué es un crédito automotriz directo?',
  'Es un crédito que otorga la misma automotora, sin pasar por un banco. Evaluamos tus antecedentes nosotros y te presentamos las condiciones antes de firmar.',
];

export const PREGUNTAS_INICIO = definidas([
  UBICACION,
  CONSIGNACION_O_DIRECTA,
  COBRO,
  ['¿Los autos que venden están revisados?', 'Sí. Cada auto pasa por una revisión visual y mecánica antes de publicarse.'],
  ['¿Tienen financiamiento?', 'Sí. Ofrecemos crédito directo con la automotora para autos usados, con pie desde 20%. Puedes simular la cuota en la página de financiamiento.'],
]);

export const PREGUNTAS_VENDEDOR = definidas([
  CONSIGNACION_O_DIRECTA,
  COBRO,
  ['¿Es seguro vender mi auto en consignación con EBENEZER?', 'Sí. Firmas un contrato de consignación con las condiciones de la venta, revisamos el auto antes de publicarlo y la transferencia se hace en forma digital.'],
  ['¿Quién decide el precio?', 'Tú. Te proponemos un precio según el mercado y lo ajustamos juntos si hace falta.'],
  ['¿Puedo vender mi auto si todavía lo estoy pagando o tiene prenda?', 'Sí, en la mayoría de los casos. Lo revisamos en la tasación y la deuda se paga con la venta.'],
  ['¿Puedo vender mi auto con deudas de TAG o multas?', 'Por lo general deben quedar pagadas antes de la transferencia. Las revisamos en la tasación y te decimos cómo resolverlas.'],
  ['¿Qué documentos necesito para vender mi auto?', 'Tu cédula de identidad, el padrón o certificado de inscripción, el permiso de circulación, la revisión técnica y el SOAP vigentes. Si tiene crédito o prenda, los datos de la financiera.'],
  ['¿Dónde queda mi auto mientras se vende?', 'Contigo. Puedes seguir usando tu auto mientras lo publicitamos, y coordinamos contigo cada visita de un comprador.'],
  UBICACION,
]);

export const PREGUNTAS_COMPRADOR = definidas([
  ['¿Los autos usados están revisados?', 'Sí. Cada auto pasa por una revisión visual y mecánica antes de publicarse.'],
  ['¿El precio publicado es el final?', 'Sí. El precio publicado incluye IVA. La transferencia no está incluida y te informamos su costo antes de firmar.'],
  ['¿Conviene comprar un auto usado en una automotora o a un particular?', 'Con un particular el precio puede ser menor, pero la revisión del auto, sus antecedentes y la transferencia corren por tu cuenta. En EBENEZER el auto llega revisado y la transferencia la hacemos nosotros.'],
  ['¿Puedo comprar el auto con crédito?', 'Sí. Ofrecemos crédito directo con la automotora, con pie desde 20%. Puedes simular la cuota en la ficha de cada auto.'],
  ['¿Puedo dejar mi auto en parte de pago?', 'Sí. Lo tasamos y el valor se descuenta del precio del auto que compras.'],
  ['¿Pueden conseguirme un auto que no está en el catálogo?', 'Sí. Déjanos tu encargo con el tipo de auto y tu presupuesto, y te avisamos cuando entre uno.'],
  UBICACION,
]);

export const PREGUNTAS_CREDITO = definidas([
  CREDITO_DIRECTO,
  ['¿Conviene más el crédito directo o un crédito bancario?', 'Depende de tu perfil. El crédito directo suele tener un trámite más simple porque lo evaluamos nosotros; un banco puede ofrecerte otra tasa. Para comparar, fíjate siempre en la CAE y en el costo total del crédito.'],
  ['¿Qué requisitos piden para el crédito?', 'Cédula de identidad vigente, tus últimas liquidaciones de sueldo o boletas de honorarios, el certificado de cotizaciones de AFP y un pie desde 20% del valor del auto.'],
  ['¿Evalúan a trabajadores independientes?', 'Sí. Si emites boletas de honorarios, las usamos para evaluar tus ingresos.'],
  ['¿La cuota que veo en la web es final?', 'No. Es referencial y depende de la evaluación crediticia. La cuota final, la tasa y la CAE se informan en la cotización formal.'],
  ['¿Puedo dejar mi auto en parte de pago?', 'Sí. Lo tasamos y el valor se descuenta del precio del auto que compras.'],
  ['¿Cuánto demora la evaluación?', 'Te respondemos en un plazo de 48 horas desde que envías tu solicitud con los antecedentes.'],
  ['¿Qué pasa si no me aprueban?', 'Te avisamos y vemos alternativas, como más pie, otro plazo u otro auto.'],
]);

// Ficha de cada auto: lo que pregunta quien ya está mirando un auto concreto.
export const PREGUNTAS_FICHA = PREGUNTAS_COMPRADOR.filter(([q]) =>
  ['¿Los autos usados están revisados?', '¿El precio publicado es el final?', '¿Puedo comprar el auto con crédito?', '¿Puedo dejar mi auto en parte de pago?'].includes(q)
);

export const PREGUNTAS_CONTACTO = definidas([
  UBICACION,
  ['¿Cuál es la forma más rápida de contactarlos?', 'WhatsApp. Te responde directamente Patricio Escobar, fundador de la automotora.'],
  ['¿Puedo pedir una tasación sin compromiso?', 'Sí. Completa el formulario de tasación o escríbenos por WhatsApp con los datos de tu auto y te respondemos con la tasación.'],
]);

export const PREGUNTAS_NOSOTROS = definidas([
  UBICACION,
  ['¿Quién está detrás de EBENEZER?', 'Patricio Escobar, fundador de la automotora, con más de 5 años de experiencia en el rubro inmobiliario. Atiende personalmente a cada cliente.'],
  ['¿Qué servicios ofrecen?', 'Vendemos tu auto en consignación o te lo compramos directo, vendemos autos usados revisados y ofrecemos crédito directo con la automotora.'],
  ['¿Cómo los contacto?', 'Por WhatsApp, que es la forma más rápida, o con el formulario de la página de contacto.'],
]);
