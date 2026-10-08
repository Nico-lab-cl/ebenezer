import ajustes from '@/content/ajustes.json';
import { real } from './datos';
import type { Pregunta } from './faq';

/* JSON-LD. Lo que no tiene dato real (entre corchetes) se omite: Google
   penaliza datos estructurados que no coinciden con lo que ve el usuario. */

// Identificadores estables: las demás piezas (servicios, ofertas, sitio) apuntan a la automotora.
export const idAutomotora = (site: URL) => new URL('/#automotora', site).href;
const idSitio = (site: URL) => new URL('/#sitio', site).href;

export function automotora(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': idAutomotora(site),
    name: ajustes.nombre,
    url: site.href,
    logo: new URL('/assets/logo/png/ebenezer-logo-grafito-2x.png', site).href,
    image: new URL('/og/ebenezer.jpg', site).href,
    description: 'Automotora del litoral central con base en El Tabo. Compra, vende y consigna autos usados y ofrece crédito directo en toda la Región de Valparaíso.',
    telephone: real(ajustes.telefono),
    email: real(ajustes.email),
    address: {
      '@type': 'PostalAddress',
      streetAddress: real(ajustes.direccion),
      addressLocality: ajustes.comuna,
      addressRegion: 'Región de Valparaíso',
      addressCountry: 'CL',
    },
    // Base en El Tabo (litoral central); atiende toda la región.
    areaServed: { '@type': 'AdministrativeArea', name: 'Región de Valparaíso' },
    sameAs: [ajustes.instagram, ajustes.facebook].filter(Boolean),
  };
}

export function sitioWeb(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': idSitio(site),
    name: ajustes.nombre,
    url: site.href,
    inLanguage: 'es-CL',
    publisher: { '@id': idAutomotora(site) },
  };
}

/* FAQPage: sólo con las preguntas que la página muestra, con el mismo texto. */
export function preguntas(items: Pregunta[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

/* Servicio que presta la automotora (venta de autos de terceros, crédito). */
export function servicio(site: URL, s: { nombre: string; tipo: string; descripcion: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.nombre,
    serviceType: s.tipo,
    description: s.descripcion,
    url: new URL(s.url, site).href,
    provider: { '@id': idAutomotora(site) },
    areaServed: { '@type': 'AdministrativeArea', name: 'Región de Valparaíso' },
  };
}

/* Lista de autos del catálogo: ayuda a Google a descubrir cada ficha. */
export function listaAutos(site: URL, autos: { nombre: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: autos.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.nombre, url: new URL(a.url, site).href })),
  };
}

export function migas(site: URL, items: { nombre: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nombre,
      item: it.url ? new URL(it.url, site).href : undefined,
    })),
  };
}

interface DatosAuto {
  nombre: string;
  marca: string;
  modelo: string;
  anio: number;
  km: number;
  transmision: string;
  combustible: string;
  color: string;
  precio: number;
  vendido: boolean;
  url: string;
  imagenes: string[];
}

export function auto(site: URL, a: DatosAuto) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: a.nombre,
    brand: { '@type': 'Brand', name: a.marca },
    model: a.modelo,
    vehicleModelDate: String(a.anio),
    itemCondition: 'https://schema.org/UsedCondition',
    mileageFromOdometer: { '@type': 'QuantitativeValue', value: a.km, unitCode: 'KMT' },
    vehicleTransmission: a.transmision,
    fuelType: a.combustible,
    color: real(a.color),
    image: a.imagenes,
    url: new URL(a.url, site).href,
    offers: {
      '@type': 'Offer',
      price: a.precio,
      priceCurrency: 'CLP',
      availability: a.vendido ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
      seller: { '@id': idAutomotora(site) },
    },
  };
}

/* Guías: artículo publicado por la automotora. */
export function articulo(site: URL, a: { titulo: string; descripcion: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.titulo,
    description: a.descripcion,
    url: new URL(a.url, site).href,
    mainEntityOfPage: new URL(a.url, site).href,
    inLanguage: 'es-CL',
    datePublished: '2026-10-08',
    author: { '@id': idAutomotora(site) },
    publisher: { '@id': idAutomotora(site) },
  };
}
