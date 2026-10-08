import ajustes from '@/content/ajustes.json';
import { real } from './datos';

/* Preguntas frecuentes. Las usan las páginas y el JSON-LD FAQPage, para que
   el texto marcado sea exactamente el que ve el visitante (requisito de Google).
   Las respuestas sin definir (entre corchetes) no se muestran ni se marcan:
   aparecen solas cuando se completan. La comisión se conversa por WhatsApp,
   por decisión de la automotora. */
export type Pregunta = [pregunta: string, respuesta: string];

const definidas = (lista: [string, string | undefined][]) => lista.filter((p): p is Pregunta => Boolean(real(p[1])));

export const PREGUNTAS_VENDEDOR = definidas([
  ['¿Cuánto cobran?', 'Depende de tu auto y de la modalidad que elijas (consignación o venta directa). Te lo explicamos por WhatsApp junto con la tasación, sin compromiso.'],
  ['¿Quién decide el precio?', 'Tú. Te proponemos un precio según el mercado y lo ajustamos juntos si hace falta.'],
  ['¿Dónde queda mi auto mientras se vende?', '[Definir: en exhibición en nuestro local o contigo hasta cada visita]'],
  ['¿Mi auto tiene crédito o prenda vigente, igual se puede?', 'Sí, en la mayoría de los casos. Lo revisamos en la tasación y la deuda se paga con la venta.'],
  ['¿Cuándo recibo el dinero?', ajustes.plazoPago],
  ['¿Puedo retirar mi auto si cambio de opinión?', '[Definir condiciones de retiro]'],
]);

export const PREGUNTAS_CREDITO = definidas([
  ['¿La cuota que veo en la web es final?', 'No. Es referencial y depende de la evaluación crediticia. La cuota final, la tasa y la CAE se informan en la cotización formal.'],
  ['¿Puedo dejar mi auto en parte de pago?', 'Sí. Lo tasamos y el valor se descuenta del precio del auto que compras.'],
  ['¿Cuánto demora la evaluación?', '[Plazo habitual de la evaluación]'],
  ['¿Qué pasa si no me aprueban?', 'Te avisamos y vemos alternativas, como más pie, otro plazo u otro auto.'],
]);
