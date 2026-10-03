function CatalogScreen({ openCar, fav, toggleFav }) {
  const { FilterPanel, VehicleCard, Breadcrumbs, Pagination, Select, Tag, Button } = window.EBENEZERDesignSystem_9e2a3a;
  const [page, setPage] = React.useState(1);
  const [drawer, setDrawer] = React.useState(false);
  const list = [...VEHICLES, ...VEHICLES.slice(1, 4)];
  return (
    <div data-theme="light" style={{ background: 'var(--bg-page)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <div className="ebz-container" style={{ padding: '28px var(--grid-margin) 72px' }}>
        <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Comprar' }]} />
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, margin: '18px 0 28px', flexWrap: 'wrap' }}>
          <div>
            <h1 className="ebz-h1">Autos usados y seminuevos</h1>
            <p className="ebz-body" style={{ color: 'var(--text-secondary)', marginTop: 8 }}><b className="ebz-num" style={{ color: 'var(--text-primary)' }}>39 autos</b> revisados en la Región de Valparaíso</p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
            <span className="cat-mobile-only"><Button variant="secondary" icon="sliders-horizontal" onClick={() => setDrawer(true)}>Filtros</Button></span>
            <Select label="Ordenar por" options={['Más recientes', 'Menor precio', 'Mayor precio', 'Menor kilometraje']} style={{ width: 220 }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '290px minmax(0,1fr)', gap: 28, alignItems: 'start' }} className="cat-grid">
          <div className="cat-desktop-only" style={{ position: 'sticky', top: 96 }}><FilterPanel /></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Audi', 'Automática', '$5M – $25M'].map((t) => <Tag key={t} onRemove={() => {}}>{t}</Tag>)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 22 }}>
              {list.map((v, i) => <VehicleCard key={v.id + i} vehicle={v} onOpen={openCar} favorite={fav.includes(v.id)} onFavorite={toggleFav} />)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12 }}><Pagination page={page} total={5} onChange={setPage} /></div>
          </div>
        </div>
      </div>
      <FilterPanel variant="drawer" open={drawer} onClose={() => setDrawer(false)} resultCount={39} />
    </div>
  );
}
window.CatalogScreen = CatalogScreen;
