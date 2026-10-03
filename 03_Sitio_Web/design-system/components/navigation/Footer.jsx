import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Checkered } from '../brand/Checkered.jsx';
import { Icon } from '../brand/Icon.jsx';
const COMUNAS = ['Viña del Mar', 'Concón', 'Valparaíso', 'Quilpué', 'Villa Alemana'];
export function Footer({ address = 'Dirección por confirmar, Viña del Mar', phone = '+56 9 0000 0000', email = 'contacto@ebenezer.cl', hours = 'Lun a Vie 10:00–19:00 · Sáb 10:00–14:00', style }) {
  return (
    <footer className="ebz-footer" style={style}>
      <div className="ebz-container">
        <div className="ebz-footer__grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Logo variant="white" height={52} />
            <p style={{ maxWidth: 320, lineHeight: 1.6 }}>Autos usados y seminuevos revisados, con precio claro y transferencia digital. Región de Valparaíso.</p>
            <Checkered width={96} size={8} />
          </div>
          <div><h4>Comprar</h4><ul><li><a href="#">Catálogo</a></li><li><a href="#">Seminuevos</a></li><li><a href="#">Rebajados</a></li><li><a href="#">Financiamiento</a></li></ul></div>
          <div><h4>EBENEZER</h4><ul><li><a href="#">Vender mi auto</a></li><li><a href="#">Nosotros</a></li><li><a href="#">Preguntas frecuentes</a></li><li><a href="#">Contacto</a></li></ul></div>
          <div><h4>Contacto</h4><ul>
            <li style={{ display: 'flex', gap: 8 }}><Icon name="map-pin" size={16} style={{ marginTop: 2 }} />{address}</li>
            <li style={{ display: 'flex', gap: 8 }}><Icon name="phone" size={16} style={{ marginTop: 2 }} />{phone}</li>
            <li style={{ display: 'flex', gap: 8 }}><Icon name="mail" size={16} style={{ marginTop: 2 }} />{email}</li>
            <li style={{ display: 'flex', gap: 8 }}><Icon name="clock" size={16} style={{ marginTop: 2 }} />{hours}</li>
          </ul></div>
        </div>
        <div className="ebz-footer__bottom">
          <span>{COMUNAS.join(' · ')}</span>
          <span>© {new Date().getFullYear()} EBENEZER Automotora · Precios en CLP con IVA incluido</span>
        </div>
      </div>
    </footer>
  );
}
