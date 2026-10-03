import React from 'react';
import { Checkbox } from '../forms/Checkbox.jsx';
import { RangeSlider } from '../forms/RangeSlider.jsx';
import { Tag } from '../forms/Tag.jsx';
import { Button } from '../buttons/Button.jsx';
import { IconButton } from '../buttons/IconButton.jsx';
import { Icon } from '../brand/Icon.jsx';
import { formatCLP } from '../vehicle/VehicleCard.jsx';
const BRANDS = [['Audi', 3], ['Chevrolet', 6], ['Hyundai', 5], ['Kia', 7], ['Mazda', 4], ['Nissan', 5], ['Toyota', 9]];
function Section({ title, children, defaultOpen = true }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="ebz-filters__sec">
      <button type="button" className="ebz-filters__sech" aria-expanded={open} onClick={() => setOpen(!open)}>{title}<Icon name={open ? 'minus' : 'plus'} size={16} /></button>
      {open && children}
    </div>
  );
}
export function FilterPanel({ variant = 'sidebar', open = true, onClose, resultCount = 39, brands = BRANDS, onChange, inline, style }) {
  const [f, setF] = React.useState({ marcas: ['Audi'], precio: [5000000, 25000000], anio: [2012, 2024], km: [0, 150000], trans: 'Automática', fuel: [] });
  const upd = (patch) => { const n = { ...f, ...patch }; setF(n); onChange && onChange(n); };
  const toggle = (arr, v) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  const reset = () => upd({ marcas: [], precio: [3000000, 40000000], anio: [2008, 2025], km: [0, 200000], trans: '', fuel: [] });
  if (variant === 'drawer' && !open) return null;
  const panel = (
    <aside className={'ebz-filters' + (variant === 'drawer' ? ' ebz-drawer' + (inline ? ' ebz-drawer--inline' : '') : '')} style={style} aria-label="Filtros">
      <div className="ebz-filters__head">
        <span className="ebz-h5" style={{ fontStyle: 'italic', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="sliders-horizontal" size={18} />Filtros</span>
        {variant === 'drawer' ? <IconButton icon="x" label="Cerrar filtros" onClick={onClose} /> : <button type="button" onClick={reset} style={{ border: 0, background: 'none', color: 'var(--text-accent)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Limpiar</button>}
      </div>
      <Section title="Marca">
        {brands.map(([b, c]) => <Checkbox key={b} label={b} count={c} checked={f.marcas.includes(b)} onChange={() => upd({ marcas: toggle(f.marcas, b) })} />)}
      </Section>
      <Section title="Precio"><RangeSlider min={3000000} max={40000000} step={500000} value={f.precio} onChange={(v) => upd({ precio: v })} format={formatCLP} /></Section>
      <Section title="Año"><RangeSlider min={2008} max={2025} value={f.anio} onChange={(v) => upd({ anio: v })} /></Section>
      <Section title="Kilometraje"><RangeSlider min={0} max={200000} step={5000} value={f.km} onChange={(v) => upd({ km: v })} format={(v) => v.toLocaleString('es-CL') + ' km'} /></Section>
      <Section title="Transmisión"><div className="ebz-filters__tags">{['Automática', 'Manual'].map((t) => <Tag key={t} selected={f.trans === t} onClick={() => upd({ trans: f.trans === t ? '' : t })}>{t}</Tag>)}</div></Section>
      <Section title="Combustible"><div className="ebz-filters__tags">{['Bencina', 'Diésel', 'Híbrido', 'Eléctrico'].map((t) => <Tag key={t} selected={f.fuel.includes(t)} onClick={() => upd({ fuel: toggle(f.fuel, t) })}>{t}</Tag>)}</div></Section>
      {variant === 'drawer' && (
        <div className="ebz-filters__foot">
          <Button variant="ghost" onClick={reset}>Limpiar</Button>
          <Button block onClick={onClose}>Ver {resultCount} autos</Button>
        </div>
      )}
    </aside>
  );
  if (variant === 'drawer' && !inline) return <><div className="ebz-drawer-scrim" onClick={onClose} />{panel}</>;
  return panel;
}
