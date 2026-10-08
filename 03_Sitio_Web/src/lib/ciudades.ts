import type { Pregunta } from './faq';

/* Páginas de ciudad del pilar Autos usados (plan SEO, 01_Fuentes_NotebookLM/
   arquitectura-seo-2026-10.html). Cada una con su palabra principal en el H1,
   sus comunas reales y preguntas propias, para que no sea una copia con otro
   nombre. Sólo datos confirmados: base en El Tabo, tasación en línea,
   revisión, visitas y transferencia coordinadas con el cliente. */
export interface Ciudad {
  slug: string;
  /** Nombre corto para migas y enlaces */
  nombre: string;
  /** Cómo se nombra la zona en los textos ("Quilpué y Villa Alemana") */
  zona: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Párrafo propio de la zona para "Cómo funciona si vives en…" */
  local: string;
  comunas: string[];
  preguntas: Pregunta[];
}

const VIAJAR = (zona: string): Pregunta => [
  `¿Tengo que ir a El Tabo para vender mi auto si vivo en ${zona}?`,
  'No. La tasación parte en línea y por WhatsApp. La revisión, las visitas de compradores y la transferencia las coordinamos contigo.',
];
const VER_AUTO = (zona: string): Pregunta => [
  `¿Puedo comprar un auto usado de EBENEZER si vivo en ${zona}?`,
  'Sí. Escríbenos por WhatsApp por el auto que te interesa y coordinamos contigo la visita para verlo. También puedes financiarlo con crédito directo.',
];

export const CIUDADES: Ciudad[] = [
  {
    slug: 'san-antonio',
    nombre: 'San Antonio',
    zona: 'San Antonio y el litoral central',
    title: 'Automotora en San Antonio y el litoral central | EBENEZER',
    description: 'Automotora del litoral central con base en El Tabo. Autos usados en San Antonio, tasación gratis y compra o consignación de tu auto. Crédito directo.',
    h1: 'Automotora en San Antonio y el litoral central',
    intro: 'EBENEZER es una automotora del litoral central con base en El Tabo. Vendemos autos usados revisados y compramos o consignamos tu auto en San Antonio, Cartagena, El Quisco, Algarrobo y toda la provincia.',
    local: 'Somos de aquí. Nuestra base está en El Tabo, así que en la provincia de San Antonio coordinamos la revisión, las visitas y la firma más cerca de ti que cualquier automotora de Viña o Santiago.',
    comunas: ['San Antonio', 'Cartagena', 'El Tabo', 'El Quisco', 'Algarrobo', 'Santo Domingo'],
    preguntas: [
      ['¿Dónde está la automotora en el litoral central?', 'Tenemos base en El Tabo. Atendemos San Antonio, Cartagena, El Quisco, Algarrobo, Santo Domingo y el resto de la Región de Valparaíso, y coordinamos contigo cada visita.'],
      VER_AUTO('San Antonio'),
      ['¿Compran autos usados en San Antonio?', 'Sí. Te hacemos una oferta y, si te acomoda, te compramos el auto. También puedes dejarlo en consignación y seguir usándolo hasta que se venda.'],
    ],
  },
  {
    slug: 'quilpue-villa-alemana',
    nombre: 'Quilpué y Villa Alemana',
    zona: 'Quilpué y Villa Alemana',
    title: 'Automotora en Quilpué y Villa Alemana | EBENEZER',
    description: 'Autos usados para Quilpué, El Belloto y Villa Alemana. Tasación gratis de tu auto, compra directa o consignación y crédito directo con la automotora.',
    h1: 'Automotora en Quilpué y Villa Alemana',
    intro: 'Si buscas una automotora en Quilpué o en Villa Alemana, en EBENEZER tienes autos usados revisados con crédito directo y una forma simple de vender tu auto, desde El Belloto hasta Limache y Olmué.',
    local: 'Quilpué y Villa Alemana son parte de la provincia de Marga Marga, una de las zonas con más búsquedas de autos usados de la región. La tasación la hacemos en línea y coordinamos contigo la revisión y las visitas.',
    comunas: ['Quilpué', 'El Belloto', 'Villa Alemana', 'Limache', 'Olmué'],
    preguntas: [
      VIAJAR('Quilpué o Villa Alemana'),
      VER_AUTO('Villa Alemana'),
      ['¿Atienden El Belloto y Limache?', 'Sí. Atendemos toda la provincia de Marga Marga, incluidos El Belloto, Limache y Olmué.'],
    ],
  },
  {
    slug: 'san-felipe',
    nombre: 'San Felipe',
    zona: 'San Felipe',
    title: 'Automotora en San Felipe · Autos usados | EBENEZER',
    description: 'Autos usados para San Felipe y el valle de Aconcagua. Tasación gratis, compra directa o consignación de tu auto y crédito directo con la automotora.',
    h1: 'Automotora en San Felipe',
    intro: 'EBENEZER es una automotora para San Felipe y el valle de Aconcagua. Vendemos autos usados revisados con crédito directo, y si quieres vender tu auto te lo compramos o lo vendemos por ti en consignación.',
    local: 'En San Felipe y el resto de la provincia, como Llaillay, Putaendo o Santa María, la tasación parte en línea y por WhatsApp. La revisión, las visitas y la transferencia las coordinamos contigo.',
    comunas: ['San Felipe', 'Llaillay', 'Putaendo', 'Santa María', 'Panquehue', 'Catemu'],
    preguntas: [
      VIAJAR('San Felipe'),
      VER_AUTO('San Felipe'),
      ['¿Atienden Llaillay y Putaendo?', 'Sí. Atendemos toda la provincia de San Felipe de Aconcagua y el resto de la Región de Valparaíso.'],
    ],
  },
  {
    slug: 'quillota',
    nombre: 'Quillota',
    zona: 'Quillota, La Calera y Limache',
    title: 'Automotora en Quillota, La Calera y Limache | EBENEZER',
    description: 'Autos usados para Quillota, La Calera y Limache. Tasación gratis, compra directa o consignación de tu auto y crédito directo con la automotora.',
    h1: 'Automotora en Quillota La Calera y Limache',
    intro: 'Si buscas una automotora en Quillota, La Calera o Limache, en EBENEZER tienes autos usados revisados con crédito directo y la opción de vender tu auto en consignación o en venta directa.',
    local: 'Atendemos la provincia de Quillota, con La Cruz, Hijuelas y Nogales, y la vecina Limache. La tasación la hacemos en línea y coordinamos contigo la revisión, las visitas y la transferencia.',
    comunas: ['Quillota', 'La Calera', 'La Cruz', 'Hijuelas', 'Nogales', 'Limache'],
    preguntas: [
      VIAJAR('Quillota'),
      VER_AUTO('La Calera'),
      ['¿Compran autos usados en Quillota?', 'Sí. Te hacemos una oferta y, si te acomoda, te compramos el auto. También puedes dejarlo en consignación y seguir usándolo hasta que se venda.'],
    ],
  },
  {
    slug: 'los-andes',
    nombre: 'Los Andes',
    zona: 'Los Andes',
    title: 'Automotora en Los Andes · Autos usados | EBENEZER',
    description: 'Autos usados para Los Andes, San Esteban, Calle Larga y Rinconada. Tasación gratis de tu auto, compra directa o consignación y crédito directo.',
    h1: 'Automotora en Los Andes',
    intro: 'EBENEZER atiende Los Andes, San Esteban, Calle Larga y Rinconada. Vendemos autos usados revisados con crédito directo, y compramos o consignamos tu auto.',
    local: 'En la provincia de Los Andes la tasación parte en línea y por WhatsApp. La revisión, las visitas y la transferencia las coordinamos contigo, sin que tengas que viajar a la costa.',
    comunas: ['Los Andes', 'San Esteban', 'Calle Larga', 'Rinconada'],
    preguntas: [
      VIAJAR('Los Andes'),
      VER_AUTO('Los Andes'),
      ['¿Atienden San Esteban y Rinconada?', 'Sí. Atendemos toda la provincia de Los Andes y el resto de la Región de Valparaíso.'],
    ],
  },
  {
    slug: 'valparaiso',
    nombre: 'Valparaíso',
    zona: 'Valparaíso',
    title: 'Automotora en Valparaíso · Autos usados | EBENEZER',
    description: 'Autos usados para Valparaíso, Placilla y Casablanca. Tasación gratis, compra directa o consignación de tu auto y crédito directo con la automotora.',
    h1: 'Automotora en Valparaíso',
    intro: 'Si buscas una automotora en Valparaíso, en EBENEZER tienes autos usados revisados con crédito directo y una forma simple de vender tu auto, sin atender llamadas ni visitas de desconocidos.',
    local: 'Atendemos Valparaíso, Placilla, Curauma y Casablanca. La tasación la hacemos en línea y coordinamos contigo la revisión, las visitas de compradores y la transferencia.',
    comunas: ['Valparaíso', 'Placilla', 'Curauma', 'Casablanca'],
    preguntas: [
      VIAJAR('Valparaíso'),
      VER_AUTO('Valparaíso'),
      ['¿Atienden Placilla y Curauma?', 'Sí. Atendemos todo Valparaíso, incluidos Placilla y Curauma, y el resto de la región.'],
    ],
  },
  {
    slug: 'vina-del-mar',
    nombre: 'Viña del Mar',
    zona: 'Viña del Mar',
    title: 'Automotora en Viña del Mar · Autos usados | EBENEZER',
    description: 'Autos usados y seminuevos para Viña del Mar, Reñaca y Concón. Tasación gratis, compra directa o consignación de tu auto y crédito directo.',
    h1: 'Automotora en Viña del Mar',
    intro: 'Si buscas autos usados en Viña del Mar, en EBENEZER tienes autos revisados con precio a la vista y crédito directo. Y si quieres vender tu auto, te lo compramos o lo vendemos por ti en consignación.',
    local: 'Atendemos Viña del Mar, Reñaca, Concón y Quintero. La tasación la hacemos en línea y coordinamos contigo la revisión, las visitas de compradores y la transferencia.',
    comunas: ['Viña del Mar', 'Reñaca', 'Concón', 'Quintero'],
    preguntas: [
      VIAJAR('Viña del Mar'),
      VER_AUTO('Viña del Mar'),
      ['¿Tienen autos seminuevos?', 'Publicamos autos usados y seminuevos revisados. Si no está el que buscas, déjanos tu encargo y te avisamos cuando entre uno.'],
    ],
  },
];

/* Comuna → página de ciudad, para enlazar desde las zonas de la región. */
export const PAGINA_DE_COMUNA: Record<string, string> = Object.fromEntries(
  CIUDADES.flatMap((c) => c.comunas.map((co) => [co, `/autos-usados/${c.slug}/`]))
);
