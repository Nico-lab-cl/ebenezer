import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function Checkbox({ label, count, checked, defaultChecked, onChange, disabled, className = '', style }) {
  return (
    <label className={'ebz-check ' + className} style={{ opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} />
      <span className="ebz-check__box"><Icon name="check" size={14} /></span>
      <span>{label}</span>
      {count !== undefined && <span className="ebz-check__count ebz-num">{count}</span>}
    </label>
  );
}
