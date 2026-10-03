import React from 'react';
import { Select } from '../forms/Select.jsx';
import { Button } from '../buttons/Button.jsx';
const MODELS = { Audi: ['A3', 'A4', 'Q3', 'TT'], Chevrolet: ['Sail', 'Tracker', 'Onix'], Hyundai: ['Accent', 'Tucson', 'Santa Fe'], Kia: ['Morning', 'Rio', 'Sportage'], Mazda: ['3', 'CX-5'], Nissan: ['Versa', 'Kicks', 'X-Trail'], Suzuki: ['Swift', 'Vitara'], Toyota: ['Yaris', 'Corolla', 'RAV4', 'Hilux'] };
const PRICES = [['0-8000000', 'Hasta $8.000.000'], ['8000000-12000000', '$8 a $12 millones'], ['12000000-18000000', '$12 a $18 millones'], ['18000000-99000000', 'Más de $18 millones']];
export function QuickSearch({ models = MODELS, onSearch, style }) {
  const [q, setQ] = React.useState({ marca: '', modelo: '', anio: '', precio: '' });
  const set = (k) => (e) => setQ({ ...q, [k]: e.target.value, ...(k === 'marca' ? { modelo: '' } : {}) });
  const years = Array.from({ length: 16 }, (_, i) => String(new Date().getFullYear() - i));
  return (
    <form className="ebz-qs" data-theme="dark" style={style} onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(q); }} role="search">
      <Select label="Marca" placeholder="Todas" options={Object.keys(models)} value={q.marca} onChange={set('marca')} />
      <Select label="Modelo" placeholder={q.marca ? 'Todos' : 'Elige marca'} options={models[q.marca] || []} value={q.modelo} onChange={set('modelo')} disabled={!q.marca} />
      <Select label="Año desde" placeholder="Cualquiera" options={years} value={q.anio} onChange={set('anio')} />
      <Select label="Precio" placeholder="Cualquiera" options={PRICES.map(([value, label]) => ({ value, label }))} value={q.precio} onChange={set('precio')} />
      <Button type="submit" size="lg" icon="search">Buscar</Button>
    </form>
  );
}
