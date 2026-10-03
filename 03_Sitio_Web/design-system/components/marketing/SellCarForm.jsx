import React from 'react';
import { Input } from '../forms/Input.jsx';
import { Select } from '../forms/Select.jsx';
import { Tag } from '../forms/Tag.jsx';
import { Button } from '../buttons/Button.jsx';
import { WhatsAppButton } from '../buttons/WhatsAppButton.jsx';
import { Icon } from '../brand/Icon.jsx';
const STEPS = ['Tu auto', 'Estado', 'Contacto', 'Listo'];
export function SellCarForm({ initialStep = 0, phone, onSubmit, style }) {
  const [s, setS] = React.useState(initialStep);
  const [d, setD] = React.useState({ patente: '', marca: '', modelo: '', anio: '', km: '', estado: 'Bueno', duenos: '1', mant: 'Sí, en concesionario', nombre: '', tel: '', email: '', comuna: '' });
  const f = (k) => ({ value: d[k], onChange: (e) => setD({ ...d, [k]: e.target.value }) });
  const years = Array.from({ length: 20 }, (_, i) => String(new Date().getFullYear() - i));
  const next = () => { if (s === 2 && onSubmit) onSubmit(d); setS(Math.min(s + 1, 3)); };
  const car = { brand: d.marca, model: d.modelo, year: d.anio };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, ...style }}>
      <ol className="ebz-steps" style={{ '--n': STEPS.length }}>
        {STEPS.map((t, i) => (
          <li key={t} data-state={i < s ? 'done' : i === s ? 'current' : 'next'}>
            <span className="ebz-steps__bar" />
            <span><span className="ebz-steps__n">0{i + 1}</span>{t}</span>
          </li>
        ))}
      </ol>
      {s === 0 && (
        <div className="ebz-form-step" key="0">
          <Input className="ebz-span-2" label="Patente" placeholder="Ej: DGLR28" icon="scan-line" help="Con la patente pre-cargamos marca, modelo y año." {...f('patente')} />
          <Input label="Marca" placeholder="Ej: Audi" {...f('marca')} />
          <Input label="Modelo" placeholder="Ej: TT" {...f('modelo')} />
          <Select label="Año" placeholder="Selecciona" options={years} {...f('anio')} />
          <Input label="Kilometraje" placeholder="Ej: 98000" suffix="km" inputMode="numeric" {...f('km')} />
        </div>
      )}
      {s === 1 && (
        <div className="ebz-form-step" key="1">
          <div className="ebz-field ebz-span-2"><span className="ebz-label">Estado general</span>
            <div className="ebz-filters__tags">{['Excelente', 'Bueno', 'Regular', 'Con detalles'].map((t) => <Tag key={t} selected={d.estado === t} onClick={() => setD({ ...d, estado: t })}>{t}</Tag>)}</div>
          </div>
          <Select label="Dueños anteriores" options={['1', '2', '3', '4 o más']} {...f('duenos')} />
          <Select label="Mantenciones al día" options={['Sí, en concesionario', 'Sí, en taller', 'No']} {...f('mant')} />
        </div>
      )}
      {s === 2 && (
        <div className="ebz-form-step" key="2">
          <Input className="ebz-span-2" label="Nombre" placeholder="Nombre y apellido" {...f('nombre')} />
          <Input label="Teléfono" placeholder="+56 9 1234 5678" icon="phone" type="tel" {...f('tel')} />
          <Input label="Email" placeholder="tu@email.cl" icon="mail" type="email" {...f('email')} />
          <Select className="ebz-span-2" label="Comuna" placeholder="Selecciona" options={['Viña del Mar', 'Concón', 'Valparaíso', 'Quilpué', 'Villa Alemana', 'Otra']} {...f('comuna')} />
        </div>
      )}
      {s === 3 && (
        <div className="ebz-form-step" key="3" style={{ gridTemplateColumns: '1fr', justifyItems: 'start', gap: 14 }}>
          <span style={{ display: 'inline-flex', width: 52, height: 52, alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: 'var(--grafito-950)', transform: 'skewX(-12deg)' }}><Icon name="check" size={28} style={{ transform: 'skewX(12deg)' }} /></span>
          <h3 className="ebz-h3">Recibimos tus datos</h3>
          <p className="ebz-body" style={{ color: 'var(--text-secondary)', maxWidth: 460 }}>Un ejecutivo te contactará en menos de 24 horas hábiles con una tasación referencial. Si quieres adelantar, escríbenos por WhatsApp.</p>
          <WhatsAppButton context="vender" vehicle={d.marca ? car : undefined} phone={phone}>Seguir por WhatsApp</WhatsAppButton>
        </div>
      )}
      {s < 3 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, paddingTop: 8, borderTop: '1px solid var(--border-subtle)' }}>
          <Button variant="ghost" icon="arrow-left" onClick={() => setS(Math.max(s - 1, 0))} disabled={s === 0}>Atrás</Button>
          <Button iconRight="arrow-right" onClick={next}>{s === 2 ? 'Enviar y tasar' : 'Continuar'}</Button>
        </div>
      )}
    </div>
  );
}
