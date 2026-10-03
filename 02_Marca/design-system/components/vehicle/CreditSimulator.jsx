import React from 'react';
import { RangeSlider } from '../forms/RangeSlider.jsx';
import { WhatsAppButton } from '../buttons/WhatsAppButton.jsx';
import { formatCLP } from './VehicleCard.jsx';
export function cuota(principal, monthlyRate, n) {
  if (monthlyRate === 0) return principal / n;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
}
export function CreditSimulator({ price = 12990000, rate = 0.0169, minDown = 0.2, terms = [12, 24, 36, 48, 60], vehicle, phone, style }) {
  const [down, setDown] = React.useState(Math.round((price * 0.3) / 100000) * 100000);
  const [n, setN] = React.useState(36);
  const principal = Math.max(price - down, 0);
  const c = cuota(principal, rate, n);
  const minD = Math.round((price * minDown) / 100000) * 100000;
  return (
    <section className="ebz-sim" data-theme="dark" style={style} aria-label="Simulador de crédito">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <h3 className="ebz-h5" style={{ fontStyle: 'italic', fontWeight: 800 }}>Simula tu crédito</h3>
        <span className="ebz-caption">Valor <b className="ebz-num" style={{ color: '#fff' }}>{formatCLP(price)}</b></span>
      </div>
      <div className="ebz-field">
        <span className="ebz-label" style={{ display: 'flex', justifyContent: 'space-between' }}>Pie <span className="ebz-num" style={{ color: '#fff', letterSpacing: 0, fontSize: 14 }}>{formatCLP(down)} · {Math.round((down / price) * 100)}%</span></span>
        <input type="range" min={minD} max={Math.round(price * 0.8)} step={100000} value={down} onChange={(e) => setDown(Number(e.target.value))} aria-label="Pie" style={{ width: '100%', accentColor: 'var(--naranja-500)' }} />
      </div>
      <div className="ebz-field">
        <span className="ebz-label">Plazo (meses)</span>
        <div className="ebz-seg">{terms.map((t) => <button key={t} type="button" aria-pressed={t === n} onClick={() => setN(t)}>{t}</button>)}</div>
      </div>
      <div className="ebz-sim__result">
        <div className="ebz-label">Cuota referencial</div>
        <div className="ebz-price ebz-price-lg" style={{ color: 'var(--naranja-500)', marginTop: 6 }}>{formatCLP(c)}<span style={{ fontSize: 16, color: 'var(--grafito-300)', fontStyle: 'normal', fontWeight: 600 }}> /mes</span></div>
        <div className="ebz-caption" style={{ marginTop: 8 }}>Monto a financiar <b className="ebz-num" style={{ color: '#fff' }}>{formatCLP(principal)}</b> · {n} cuotas</div>
      </div>
      <WhatsAppButton context="financiamiento" vehicle={vehicle} phone={phone} block>Solicitar evaluación</WhatsAppButton>
      <p className="ebz-sim__fine">Valores referenciales, sujetos a evaluación crediticia. Tasa mensual referencial {(rate * 100).toFixed(2).replace('.', ',')}%. No incluye gastos operacionales, impuestos ni seguros. La CAE se informa en la cotización formal.</p>
    </section>
  );
}
