import ajustes from '@/content/ajustes.json';

import { real } from './datos';

/* JSON-LD. Lo que no tiene dato real (entre corchetes) se omite: Google
   penaliza datos estructurados que no coinciden con lo que ve el usuario. */

export function automotora(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: ajustes.nombre,
    url: site.href,
    logo: new URL('/assets/logo/ebenezer-logo-grafito.svg', site).href,
    telephone: real(ajustes.telefono),
    email: real(ajustes.email),
    address: {
      '@type': 'PostalAddress',
      streetAddress: real(ajustes.direccion),
      addressLocality: ajustes.comuna,
      addressRegion: 'Región de Valparaíso',
      addressCountry: 'CL',
    },
    areaServed: ['Viña del Mar', 'Concón', 'Valparaíso', 'Quilpué', 'Villa Alemana'].map((name) => ({ '@type': 'City', name })),
    sameAs: [ajustes.instagram, ajustes.facebook].filter(Boolean),
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
      seller: { '@type': 'AutoDealer', name: ajustes.nombre },
    },
  };
}
