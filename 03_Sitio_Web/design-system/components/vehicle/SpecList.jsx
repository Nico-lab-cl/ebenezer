import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function SpecList({ specs = [], columns = 3, style }) {
  return (
    <dl className="ebz-specs" style={{ '--cols': columns, margin: 0, ...style }}>
      {specs.map((s, i) => (
        <div key={i} className="ebz-specs__item">
          {s.icon && <Icon name={s.icon} size={20} />}
          <div><dt>{s.label}</dt><dd className="ebz-num">{s.value}</dd></div>
        </div>
      ))}
    </dl>
  );
}
