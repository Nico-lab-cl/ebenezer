import React from 'react';
const LUCIDE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';
const SIMPLE = 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/';
export function assetBase() {
  return (typeof window !== 'undefined' && window.EBZ_ASSETS) || 'assets/';
}
export function iconUrl(name) {
  if (name === 'whatsapp') return SIMPLE + 'whatsapp.svg';
  if (name.indexOf('service-') === 0) return assetBase() + 'icons/' + name + '.png';
  return LUCIDE + name + '.svg';
}
export function Icon({ name, size = 20, color, label, className = '', style }) {
  return (
    <span
      className={'ebz-icon ' + className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ '--icon-size': size + 'px', '--icon-url': 'url("' + iconUrl(name) + '")', color, ...style }}
    />
  );
}
