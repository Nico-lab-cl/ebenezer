import React from 'react';
import { Icon } from '../brand/Icon.jsx';
const ITEMS = [
  { icon: 'clipboard-check', title: 'Inspección de 150 puntos', text: 'Mecánica, carrocería, frenos y electrónica revisados antes de publicar. Te entregamos el informe.' },
  { icon: 'shield-check', title: 'Garantía mecánica', text: 'Cobertura de motor y caja por 3 meses o 5.000 km, lo que ocurra primero.' },
  { icon: 'file-signature', title: 'Transferencia digital', text: 'Firmas electrónicas y trámite ante el Registro Civil sin que tengas que hacer filas.' },
  { icon: 'file-search', title: 'Informe de antecedentes', text: 'Multas, prendas, dueños anteriores y encargo por robo, verificados para cada auto.' },
];
export function TrustBlock({ items = ITEMS, style }) {
  return (
    <div className="ebz-trust" style={style}>
      {items.map((it, i) => (
        <div key={i} className="ebz-trust__item">
          <Icon name={it.icon} size={36} className="ebz-trust__icon" />
          <div className="ebz-trust__title">{it.title}</div>
          <p className="ebz-trust__text">{it.text}</p>
        </div>
      ))}
    </div>
  );
}
