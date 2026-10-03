import React from 'react';
import { Icon } from '../brand/Icon.jsx';
function pages(p, t) {
  if (t <= 7) return Array.from({ length: t }, (_, i) => i + 1);
  if (p <= 4) return [1, 2, 3, 4, 5, '…', t];
  if (p >= t - 3) return [1, '…', t - 4, t - 3, t - 2, t - 1, t];
  return [1, '…', p - 1, p, p + 1, '…', t];
}
export function Pagination({ page = 1, total = 1, onChange, style }) {
  const go = (n) => () => onChange && onChange(n);
  return (
    <nav className="ebz-pag" aria-label="Paginación" style={style}>
      <button className="ebz-pag__btn" onClick={go(page - 1)} disabled={page <= 1} aria-label="Anterior"><span><Icon name="chevron-left" size={18} /></span></button>
      {pages(page, total).map((n, i) => n === '…'
        ? <span key={'g' + i} className="ebz-pag__gap">…</span>
        : <button key={n} className="ebz-pag__btn" aria-current={n === page ? 'page' : undefined} onClick={go(n)}><span>{n}</span></button>)}
      <button className="ebz-pag__btn" onClick={go(page + 1)} disabled={page >= total} aria-label="Siguiente"><span><Icon name="chevron-right" size={18} /></span></button>
    </nav>
  );
}
