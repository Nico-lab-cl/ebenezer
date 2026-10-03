import React from 'react';
import { assetBase } from './Icon.jsx';
const FILES = {
  logo: { white: 'logo-blanco', color: 'logo-grafito', mono: 'logo-mono-grafito', 'mono-white': 'logo-mono-blanco' },
  imagotipo: { white: 'imagotipo-blanco', color: 'imagotipo-grafito', mono: 'imagotipo-grafito', 'mono-white': 'imagotipo-blanco' },
  isotipo: { white: 'isotipo-blanco', color: 'isotipo-solo-grafito', mono: 'isotipo-solo-grafito', 'mono-white': 'isotipo-blanco', 'tile-grafito': 'isotipo-grafito', 'tile-naranja': 'isotipo-naranja' },
};
export function Logo({ type = 'logo', variant = 'white', height = 48, className = '', style }) {
  const set = FILES[type] || FILES.logo;
  const file = set[variant] || set.white;
  return (
    <img
      className={className}
      src={assetBase() + 'logo/svg/ebenezer-' + file + '.svg'}
      alt={type === 'isotipo' ? 'EBENEZER' : 'EBENEZER Automotora — Compra y venta de autos'}
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  );
}
