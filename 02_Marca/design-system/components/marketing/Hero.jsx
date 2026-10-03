import React from 'react';
import { assetBase } from '../brand/Icon.jsx';
import { Checkered } from '../brand/Checkered.jsx';
import { Badge } from '../brand/Badge.jsx';
import { Button } from '../buttons/Button.jsx';
import { QuickSearch } from '../catalog/QuickSearch.jsx';
export function Hero({ overline = 'Automotora · Región de Valparaíso', title = 'Autos revisados. Precio claro.', subtitle = 'Usados y seminuevos con inspección, informe de antecedentes y transferencia digital. En Viña del Mar, Concón, Valparaíso, Quilpué y Villa Alemana.', carImage, bgImage, badge = 'seminuevo', carLabel = 'Audi TT 2011', primaryLabel = 'Ver catálogo', secondaryLabel = 'Vender mi auto', onPrimary, onSecondary, showSearch = true, onSearch, style }) {
  const car = carImage || assetBase() + 'photos/audi-tt-2011-frontal-recorte.png';
  const bg = bgImage === undefined ? assetBase() + 'photos/carretera-bn.png' : bgImage;
  return (
    <section className="ebz-hero" data-theme="dark" style={style}>
      {bg && <div className="ebz-hero__bg" style={{ backgroundImage: 'url("' + bg + '")' }} />}
      <div className="ebz-hero__panel" />
      <div className="ebz-container">
        <div className="ebz-hero__in">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span className="ebz-overline ebz-overline-rule" style={{ color: 'var(--grafito-300)' }}>{overline}</span>
            <h1 className="ebz-display">{title}</h1>
            <p className="ebz-body-lg" style={{ color: 'var(--grafito-300)', maxWidth: 480 }}>{subtitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 8 }}>
              <Button size="lg" iconRight="arrow-right" onClick={onPrimary}>{primaryLabel}</Button>
              <Button size="lg" variant="secondary" onClick={onSecondary}>{secondaryLabel}</Button>
            </div>
          </div>
          <div className="ebz-hero__car">
            <div style={{ position: 'absolute', left: '8%', top: '2%', display: 'flex', alignItems: 'center', gap: 12, zIndex: 1 }}>
              {badge && <Badge tone={badge} />}
              <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 800, color: 'var(--grafito-900)', fontSize: 18 }}>{carLabel}</span>
            </div>
            <img src={car} alt={carLabel + ' en estudio'} />
            <Checkered width={110} size={9} style={{ position: 'absolute', right: 0, bottom: 64 }} />
          </div>
        </div>
      </div>
      {showSearch && <div className="ebz-container" style={{ paddingBottom: 56 }}><div className="ebz-hero__search"><QuickSearch onSearch={onSearch} /></div></div>}
    </section>
  );
}
