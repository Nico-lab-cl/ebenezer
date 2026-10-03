function HomeScreen({ go, openCar, fav, toggleFav }) {
  const { Hero, VehicleCard, TrustBlock, Testimonial, Button, Checkered, ServiceStrip } = window.EBENEZERDesignSystem_9e2a3a;
  return (
    <>
      <Hero onPrimary={() => go('Comprar')} onSecondary={() => go('Vender mi auto')} onSearch={() => go('Comprar')} />
      <section className="ebz-container" style={{ padding: '72px var(--grid-margin) 64px' }}>
        <TrustBlock />
      </section>
      <section data-theme="light" style={{ background: 'var(--bg-page)', color: 'var(--text-primary)', padding: '72px 0' }}>
        <div className="ebz-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="ebz-overline" style={{ color: 'var(--text-accent)' }}>Recién llegados</span>
              <h2 className="ebz-h2">Seminuevos destacados</h2>
            </div>
            <Button variant="secondary" iconRight="arrow-right" onClick={() => go('Comprar')}>Ver los 39 autos</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {VEHICLES.slice(0, 4).map((v) => <VehicleCard key={v.id} vehicle={v} onOpen={openCar} favorite={fav.includes(v.id)} onFavorite={toggleFav} />)}
          </div>
        </div>
      </section>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '88px 0', background: 'var(--grafito-900)' }}>
        <div style={{ position: 'absolute', inset: '0 0 0 58%', background: 'var(--naranja-500)', clipPath: 'polygon(18% 0,100% 0,100% 100%,0 100%)' }} />
        <div className="ebz-container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,6fr) minmax(0,5fr)', gap: 40, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Checkered width={96} size={8} />
            <h2 className="ebz-h1">¿Vendes tu auto? Te lo tasamos hoy.</h2>
            <p className="ebz-body-lg" style={{ color: 'var(--grafito-300)', maxWidth: 520 }}>Oferta referencial en 24 horas hábiles, pago al firmar y transferencia digital. Sin publicar ni recibir llamadas de desconocidos.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button size="lg" iconRight="arrow-right" onClick={() => go('Vender mi auto')}>Tasar mi auto</Button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14, color: 'var(--grafito-950)' }}>
            <span className="ebz-display" style={{ fontSize: 120 }}>24h</span>
            <span className="ebz-overline" style={{ fontWeight: 700 }}>Tasación referencial</span>
          </div>
        </div>
      </section>
      <section data-theme="light" style={{ background: 'var(--bg-page)', color: 'var(--text-primary)', padding: '72px 0' }}>
        <div className="ebz-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            <span className="ebz-overline" style={{ color: 'var(--text-accent)' }}>Clientes en la región</span>
            <h2 className="ebz-h2">Lo que dicen de EBENEZER</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t) => <Testimonial key={t.name} {...t} />)}
          </div>
        </div>
      </section>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '36px 0', background: 'var(--grafito-900)' }}><ServiceStrip height={36} /></div>
    </>
  );
}
window.HomeScreen = HomeScreen;
