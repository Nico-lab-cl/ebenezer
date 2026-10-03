import ajustes from '@/content/ajustes.json';

/* Todo CTA de WhatsApp lleva un mensaje precargado según el contexto, que
   parte con "Hola, vengo de la web de EBENEZER, …" (regla del design system).
   El mismo texto lo arma el navegador en los formularios (ver src/scripts/). */
export type Contexto = 'general' | 'vehiculo' | 'visita' | 'test-drive' | 'financiamiento' | 'vender';
export interface AutoWa {
  marca?: string;
  modelo?: string;
  anio?: number | string;
  condicion?: string;
}

const INTRO = 'Hola, vengo de la web de EBENEZER, ';

export function mensaje(contexto: Contexto = 'general', auto?: AutoWa) {
  const nombre = auto
    ? [auto.marca, auto.modelo, auto.anio].filter(Boolean).join(' ') + (auto.condicion ? ' ' + auto.condicion.toLowerCase() : '')
    : '';
  switch (contexto) {
    case 'vehiculo':
      return INTRO + 'me interesa el ' + nombre + ', necesito más información';
    case 'visita':
      return INTRO + 'quiero agendar una visita para ver el ' + nombre + '. ¿Qué horarios tienen disponibles?';
    case 'test-drive':
      return INTRO + 'quiero agendar un test drive del ' + nombre + '. ¿Qué horarios tienen disponibles?';
    case 'financiamiento':
      return INTRO + 'quiero simular un crédito' + (nombre ? ' para el ' + nombre : '') + ', necesito más información';
    case 'vender':
      return INTRO + 'quiero dejar mi auto en consignación' + (nombre ? ' (' + nombre + ')' : '') + ' y necesito una tasación';
    default:
      return INTRO + 'necesito más información';
  }
}

export const numeroWhatsapp = () => String(ajustes.whatsapp).replace(/\D/g, '');

export function urlWhatsapp(contexto: Contexto = 'general', auto?: AutoWa, texto?: string) {
  return 'https://wa.me/' + numeroWhatsapp() + '?text=' + encodeURIComponent(texto ?? mensaje(contexto, auto));
}
