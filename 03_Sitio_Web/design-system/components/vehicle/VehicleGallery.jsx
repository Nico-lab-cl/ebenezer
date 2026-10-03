import React from 'react';
import { IconButton } from '../buttons/IconButton.jsx';
export function VehicleGallery({ images = [], alt = 'Vehículo', style }) {
  const [i, setI] = React.useState(0);
  const n = images.length;
  const cur = images[i] || {};
  const go = (d) => () => setI((i + d + n) % n);
  return (
    <div className="ebz-gallery" style={style}>
      <div className="ebz-gallery__main">
        {cur.src && <img key={i} src={cur.src} alt={alt + ' — ' + (cur.label || '')} />}
        {n > 1 && <IconButton className="ebz-gallery__nav" style={{ left: 12 }} variant="solid" icon="chevron-left" label="Foto anterior" onClick={go(-1)} />}
        {n > 1 && <IconButton className="ebz-gallery__nav" style={{ right: 12 }} variant="solid" icon="chevron-right" label="Foto siguiente" onClick={go(1)} />}
        <span className="ebz-gallery__count ebz-num">{cur.label ? cur.label + ' · ' : ''}{i + 1}/{n}</span>
      </div>
      <div className="ebz-gallery__thumbs">
        {images.map((im, k) => (
          <button key={k} className="ebz-gallery__thumb" aria-current={k === i} aria-label={'Ver ' + (im.label || 'foto ' + (k + 1))} onClick={() => setI(k)}>
            <img src={im.src} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
