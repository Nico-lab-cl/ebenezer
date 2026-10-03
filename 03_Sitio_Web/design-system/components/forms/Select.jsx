import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function Select({ label, options = [], placeholder, help, id, className = '', style, ...rest }) {
  const fid = id || (label ? 'sel-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return (
    <div className={'ebz-field ' + className} style={style}>
      {label && <label className="ebz-label" htmlFor={fid}>{label}</label>}
      <div className="ebz-control">
        <select id={fid} className="ebz-select" {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const v = typeof o === 'object' ? o.value : o;
            const l = typeof o === 'object' ? o.label : o;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={18} className="ebz-select__chev" />
      </div>
      {help && <span className="ebz-help">{help}</span>}
    </div>
  );
}
