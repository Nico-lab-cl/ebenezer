import React from 'react';
import { assetBase } from '../brand/Icon.jsx';
const SERVICES = [['oil', 'Cambio de aceite'], ['engine', 'Mecánica'], ['brake', 'Frenos'], ['eco', 'Eco']];
export function ServiceStrip({ height = 40, gap = 18, color = '#fff', style }) {
  return (
    <div className="ebz-services" style={{ '--h': height + 'px', '--gap': gap + 'px', color, ...style }}>
      {SERVICES.map(([k, l]) => <div key={k} className="ebz-services__item"><img src={assetBase() + 'icons/service-' + k + '.png'} alt={l} /></div>)}
    </div>
  );
}
