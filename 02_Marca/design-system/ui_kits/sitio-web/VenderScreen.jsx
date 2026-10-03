function VenderScreen({ notify }) {
  const { SellCarForm, Checkered, Icon } = window.EBENEZERDesignSystem_9e2a3a;
  const steps = [['scan-line', 'Ingresa tu patente', 'Pre-cargamos los datos de tu auto.'], ['calculator', 'Tasación en 24 h', 'Te enviamos una oferta referencial.'], ['clipboard-check', 'Inspección', 'Revisamos el auto en Viña del Mar o a domicilio.'], ['banknote', 'Pago y transferencia', 'Pagamos al firmar, trámite 100% digital.']];
  return (
    <div style={{ background: 'var(--grafito-950)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '38%', height: 520, background: 'var(--studio-gradient)', clipPath: 'polygon(30% 0,100% 0,100% 100%,0 100%)', opacity: 0.08 }} />
      <div className="ebz-container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)', gap: 56, padding: '72px var(--grid-margin) 96px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span className="ebz-overline ebz-overline-rule" style={{ color: 'var(--grafito-300)' }}>Vende tu auto</span>
          <h1 className="ebz-h1">Tasación clara, pago seguro.</h1>
          <p className="ebz-body-lg" style={{ color: 'var(--grafito-300)' }}>Completa 3 pasos y recibe una oferta referencial para tu auto. Sin compromiso.</p>
          <ol style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {steps.map(([ic, t, d], i) => (
              <li key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span className="ebz-num" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 900, fontSize: 28, color: 'var(--naranja-500)', width: 40 }}>0{i + 1}</span>
                <span><b style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name={ic} size={18} />{t}</b><span className="ebz-body-sm" style={{ color: 'var(--grafito-400)' }}>{d}</span></span>
              </li>
            ))}
          </ol>
          <Checkered width={96} size={8} style={{ marginTop: 12 }} />
        </div>
        <div style={{ background: 'var(--grafito-900)', padding: 32, borderRadius: 4, boxShadow: 'var(--shadow-3), inset 0 0 0 1px rgba(255,255,255,.08)' }}>
          <SellCarForm onSubmit={() => notify({ tone: 'success', title: 'Datos enviados', message: 'Te contactaremos en menos de 24 horas hábiles.' })} />
        </div>
      </div>
    </div>
  );
}
window.VenderScreen = VenderScreen;
