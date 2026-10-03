import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function IconButton({ icon, label, variant = 'plain', size = 'md', pressed, onClick, className = '', style }) {
  const cls = ['ebz-iconbtn', variant !== 'plain' && 'ebz-iconbtn--' + variant, size !== 'md' && 'ebz-iconbtn--' + size, className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} aria-label={label} title={label} aria-pressed={pressed === undefined ? undefined : !!pressed} onClick={onClick} style={style}>
      <Icon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 22 : 20} />
    </button>
  );
}
