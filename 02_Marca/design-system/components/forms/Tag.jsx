import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function Tag({ children, selected, onClick, onRemove, icon, static: isStatic, className = '', style }) {
  if (isStatic) return <span className={'ebz-tag ebz-tag--static ' + className} style={style}>{icon && <Icon name={icon} size={14} />}{children}</span>;
  return (
    <button type="button" className={'ebz-tag ' + className} aria-pressed={onRemove ? undefined : !!selected} onClick={onRemove || onClick} style={style}>
      {icon && <Icon name={icon} size={14} />}
      {children}
      {onRemove && <span className="ebz-tag__x"><Icon name="x" size={14} /></span>}
    </button>
  );
}
