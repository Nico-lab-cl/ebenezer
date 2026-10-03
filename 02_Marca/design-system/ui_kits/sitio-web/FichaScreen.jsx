function FichaScreen({ car, go, fav, toggleFav, notify }) {
  const { Breadcrumbs, VehicleGallery, SpecList, CreditSimulator, Badge, WhatsAppButton, Button, IconButton, Tag, TrustBlock, VehicleCard, WhatsAppFab } = window.EBENEZERDesignSystem_9e2a3a;
  const v = car || VEHICLES[0];
  const clp = (n) => '$' + n.toLocaleString('es-CL');
  const label = { seminuevo: 'Seminuevo', nuevo: 'Nuevo ingreso', rebajado: 'Rebajado' }[v.badge];
  const wa = { brand: v.brand, model: v.model, year: v.year, condition: label };
  return (
    <div data-theme="light" style={{ background: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      <div className="ebz-container" style={{ padding: '28px var(--grid-margin) 64px' }}>
        <Breadcrumbs items={[{ label: 'Inicio', onClick: (e) => { e.preventDefault(); go('Inicio'); } }, { label: 'Comprar', onClick: (e) => { e.preventDefault(); go('Comprar'); } }, { label: v.brand }, { label: v.model + ' ' + v.year }]} />
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,7fr) minmax(0,4fr)', gap: 32, marginTop: 22, alignItems: 'start' }} className="ficha-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <VehicleGallery alt={v.brand + ' ' + v.model + ' ' + v.year} images={v.gallery || []} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <h2 className="ebz-h4">Especificaciones</h2>
              <SpecList specs={[{ icon: 'calendar', label: 'Año', value: v.year }, { icon: 'gauge', label: 'Kilometraje', value: v.km.toLocaleString('es-CL') + ' km' }, { icon: 'cog', label: 'Transmisión', value: v.transmission }, { icon: 'fuel', label: 'Combustible', value: v.fuel }, { icon: 'zap', label: 'Motor', value: v.engine || '—' }, { icon: 'move-3d', label: 'Tracción', value: v.traction || '—' }, { icon: 'car', label: 'Puertas', value: v.doors || '—' }, { icon: 'palette', label: 'Color', value: v.color || '—' }, { icon: 'users', label: 'Dueños', value: v.owners || '—' }]} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <h2 className="ebz-h4">Equipamiento</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{['Climatizador', 'Cuero', 'Sensor de retroceso', 'Llantas 18"', 'Bluetooth', 'Control crucero', '6 airbags', 'ABS + ESP'].map((t) => <Tag key={t} static icon="check">{t}</Tag>)}</div>
            </div>
          </div>
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 18, position: 'sticky', top: 96 }}>
            <div style={{ background: 'var(--bg-surface)', padding: 24, boxShadow: 'var(--shadow-light-1), inset 0 0 0 1px var(--border-subtle)', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {v.badge ? <Badge tone={v.badge} /> : <span />}
                <div style={{ display: 'flex', gap: 4 }}><IconButton icon="heart" label="Guardar" pressed={fav.includes(v.id)} onClick={() => toggleFav(v)} /><IconButton icon="share-2" label="Compartir" onClick={() => notify({ tone: 'info', title: 'Enlace copiado', message: v.brand + ' ' + v.model + ' ' + v.year })} /></div>
              </div>
              <div>
                <div className="ebz-vcard__brand">{v.brand}</div>
                <h1 className="ebz-h2" style={{ marginTop: 4 }}>{v.model} <span className="ebz-num" style={{ color: 'var(--text-accent)' }}>{v.year}</span></h1>
                <div className="ebz-body-sm" style={{ color: 'var(--text-secondary)', marginTop: 6 }}>{v.version} · {v.km.toLocaleString('es-CL')} km · {v.transmission}</div>
              </div>
              <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
                <div className="ebz-label">Precio final</div>
                <div className="ebz-price ebz-price-lg" style={{ marginTop: 6 }}>{clp(v.price)}</div>
                <div className="ebz-caption" style={{ marginTop: 6 }}>IVA incluido · Transferencia no incluida</div>
              </div>
              <WhatsAppButton vehicle={wa} size="lg" block>Consultar por WhatsApp</WhatsAppButton>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <WhatsAppButton context="visita" vehicle={wa} variant="secondary" size="sm" block>Agendar visita</WhatsAppButton>
                <WhatsAppButton context="test-drive" vehicle={wa} variant="secondary" size="sm" block>Test drive</WhatsAppButton>
              </div>
            </div>
            <CreditSimulator price={v.price} vehicle={wa} />
          </aside>
        </div>
      </div>
      <section data-theme="dark" style={{ background: 'var(--grafito-950)', color: '#fff', padding: '64px 0' }}>
        <div className="ebz-container"><TrustBlock /></div>
      </section>
      <WhatsAppFab vehicle={wa} />
    </div>
  );
}
window.FichaScreen = FichaScreen;
