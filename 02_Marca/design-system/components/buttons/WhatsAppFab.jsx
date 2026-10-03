import React from 'react';
import { Icon } from '../brand/Icon.jsx';
import { whatsappUrl } from './WhatsAppButton.jsx';
export function WhatsAppFab({ context, vehicle, message, phone, label = '¿Hablamos por WhatsApp?', open, dot = true, fixed = true, style }) {
  const vctx = context || (vehicle ? 'vehiculo' : 'general');
  return (
    <a className={'ebz-fab' + (fixed ? '' : ' ebz-fab--static') + (open ? ' ebz-fab--open' : '')} href={whatsappUrl({ context: vctx, vehicle, message, phone })} target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp" style={style}>
      <span className="ebz-fab__glyph"><Icon name="whatsapp" size={30} /></span>
      <span className="ebz-fab__label">{label}</span>
      {dot && <span className="ebz-fab__dot" aria-hidden="true" />}
    </a>
  );
}
