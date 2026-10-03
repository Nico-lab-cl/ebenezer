import React from 'react';
import { Icon } from '../brand/Icon.jsx';
import { Badge } from '../brand/Badge.jsx';
import { Button } from '../buttons/Button.jsx';
import { IconButton } from '../buttons/IconButton.jsx';
import { whatsappUrl } from '../buttons/WhatsAppButton.jsx';
export function formatCLP(n) { return '$' + Math.round(n).toLocaleString('es-CL'); }
export function formatKm(n) { return Math.round(n).toLocaleString('es-CL') + ' km'; }
const BADGE_LABEL = { seminuevo: 'Seminuevo', nuevo: 'Nuevo ingreso', rebajado: 'Rebajado', vendido: 'Vendido' };
export function VehicleCard({ vehicle = {}, onOpen, favorite, onFavorite, phone, style }) {
  const v = vehicle;
  const open = (e) => { if (onOpen) { e.preventDefault(); onOpen(v); } };
  return (
    <article className="ebz-vcard" style={style}>
      <a href={v.href || '#'} onClick={open} className="ebz-vcard__media" aria-label={v.brand + ' ' + v.model + ' ' + v.year}>
        {v.image ? <img src={v.image} alt={v.brand + ' ' + v.model + ' ' + v.year + ' vista frontal'} loading="lazy" /> : <span className="ebz-photo-ph"><Icon name="car" size={36} />Foto en estudio</span>}
        <span className="ebz-vcard__stripe" />
      </a>
      {v.badge && <Badge tone={v.badge} className="ebz-vcard__badge" />}
      {onFavorite && <IconButton className="ebz-vcard__fav" variant="solid" size="sm" icon="heart" label={favorite ? 'Quitar de favoritos' : 'Guardar en favoritos'} pressed={!!favorite} onClick={() => onFavorite(v)} />}
      <div className="ebz-vcard__body">
        <div>
          <div className="ebz-vcard__brand">{v.brand}</div>
          <h3 className="ebz-vcard__title">{v.model} <span className="ebz-num">{v.year}</span></h3>
          {v.version && <div className="ebz-caption" style={{ marginTop: 2 }}>{v.version}</div>}
        </div>
        <div className="ebz-vcard__specs">
          <span className="ebz-vcard__spec"><Icon name="gauge" size={15} /><span className="ebz-num">{formatKm(v.km || 0)}</span></span>
          <span className="ebz-vcard__spec"><Icon name="cog" size={15} />{v.transmission}</span>
          <span className="ebz-vcard__spec"><Icon name="fuel" size={15} />{v.fuel}</span>
        </div>
        <div className="ebz-vcard__price">
          <div>
            {v.oldPrice && <div className="ebz-vcard__was ebz-num">{formatCLP(v.oldPrice)}</div>}
            <div className="ebz-price">{formatCLP(v.price || 0)}</div>
            {v.monthly && <div className="ebz-vcard__cuota">Cuota ref. desde <b className="ebz-num">{formatCLP(v.monthly)}</b>/mes</div>}
          </div>
        </div>
        <div className="ebz-vcard__actions">
          <Button variant="dark" size="sm" href={v.href || '#'} onClick={open} iconRight="arrow-right">Ver ficha</Button>
          <a className="ebz-iconbtn ebz-iconbtn--outline" href={whatsappUrl({ context: 'vehiculo', vehicle: { brand: v.brand, model: v.model, year: v.year, condition: BADGE_LABEL[v.badge] }, phone })} target="_blank" rel="noopener" aria-label="Consultar por WhatsApp" title="Consultar por WhatsApp"><Icon name="whatsapp" size={18} /></a>
        </div>
      </div>
    </article>
  );
}
