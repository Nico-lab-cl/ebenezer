import React from 'react';
export function RangeSlider({ label, min = 0, max = 100, step = 1, value, defaultValue, onChange, format = (v) => v, className = '', style }) {
  const [inner, setInner] = React.useState(defaultValue || [min, max]);
  const val = value || inner;
  const set = (i) => (e) => {
    const n = Number(e.target.value);
    const next = i === 0 ? [Math.min(n, val[1]), val[1]] : [val[0], Math.max(n, val[0])];
    if (!value) setInner(next);
    onChange && onChange(next);
  };
  const pct = (v) => ((v - min) / (max - min)) * 100;
  return (
    <div className={'ebz-field ' + className} style={style}>
      {label && <span className="ebz-label">{label}</span>}
      <div className="ebz-range">
        <div className="ebz-range__track" />
        <div className="ebz-range__fill" style={{ left: pct(val[0]) + '%', right: 100 - pct(val[1]) + '%' }} />
        <input type="range" min={min} max={max} step={step} value={val[0]} onChange={set(0)} aria-label={(label || '') + ' mínimo'} />
        <input type="range" min={min} max={max} step={step} value={val[1]} onChange={set(1)} aria-label={(label || '') + ' máximo'} />
      </div>
      <div className="ebz-range__vals ebz-num"><span>{format(val[0])}</span><span>{format(val[1])}</span></div>
    </div>
  );
}
