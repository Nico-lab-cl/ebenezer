import React from 'react';
import { Button } from './Button.jsx';
export const EBZ_DEFAULT_PHONE = '56900000000';
export function whatsappMessage({ context = 'general', vehicle, message } = {}) {
  if (message) return message;
  const intro = 'Hola, vengo de la web de EBENEZER, ';
  const car = vehicle ? [vehicle.brand, vehicle.model, vehicle.year].filter(Boolean).join(' ') + (vehicle.condition ? ' ' + String(vehicle.condition).toLowerCase() : '') : '';
  switch (context) {
    case 'vehiculo': return intro + 'me interesa el ' + car + ', necesito más información';
    case 'visita': return intro + 'quiero agendar una visita para ver el ' + car + '. ¿Qué horarios tienen disponibles?';
    case 'test-drive': return intro + 'quiero agendar un test drive del ' + car + '. ¿Qué horarios tienen disponibles?';
    case 'financiamiento': return intro + 'quiero simular un crédito' + (car ? ' para el ' + car : '') + ', necesito más información';
    case 'vender': return intro + 'quiero vender mi auto' + (car ? ' (' + car + ')' : '') + ' y necesito una tasación';
    default: return intro + 'necesito más información';
  }
}
export function whatsappUrl(opts = {}) {
  const phone = (opts.phone || (typeof window !== 'undefined' && window.EBZ_WHATSAPP) || EBZ_DEFAULT_PHONE).replace(/\D/g, '');
  return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(whatsappMessage(opts));
}
export function WhatsAppButton({ context, vehicle, message, phone, children = 'Escríbenos por WhatsApp', variant = 'primary', size = 'md', block, className, style }) {
  const vctx = context || (vehicle ? 'vehiculo' : 'general');
  return (
    <Button href={whatsappUrl({ context: vctx, vehicle, message, phone })} target="_blank" icon="whatsapp" variant={variant} size={size} block={block} className={className} style={style}>
      {children}
    </Button>
  );
}
