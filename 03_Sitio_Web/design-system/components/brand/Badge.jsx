import React from 'react';
const LABELS = { seminuevo: 'Seminuevo', nuevo: 'Nuevo ingreso', rebajado: 'Rebajado', brand: 'Seminuevo', vendido: 'Vendido' };
export function Badge({ tone = 'seminuevo', size = 'md', children, className = '', style }) {
  return (
    <span className={'ebz-badge ebz-badge--' + tone + (size === 'lg' ? ' ebz-badge--lg' : '') + ' ' + className} style={style}>
      <span>{children || LABELS[tone]}</span>
    </span>
  );
}
