import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function Input({ label, icon, suffix, help, error, id, className = '', style, ...rest }) {
  const fid = id || (label ? 'in-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return (
    <div className={'ebz-field ' + className} style={style}>
      {label && <label className="ebz-label" htmlFor={fid}>{label}</label>}
      <div className="ebz-control">
        {icon && <Icon name={icon} size={18} />}
        <input id={fid} className={'ebz-input' + (icon ? ' ebz-input--icon' : '')} aria-invalid={error ? true : undefined} {...rest} />
        {suffix && <span className="ebz-input__suffix">{suffix}</span>}
      </div>
      {(error || help) && <span className={'ebz-help' + (error ? ' ebz-help--error' : '')}>{error || help}</span>}
    </div>
  );
}
