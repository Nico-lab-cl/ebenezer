import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { IconButton } from '../buttons/IconButton.jsx';
import { WhatsAppButton } from '../buttons/WhatsAppButton.jsx';
const ITEMS = ['Comprar', 'Vender mi auto', 'Financiamiento', 'Nosotros', 'Contacto'];
export function Header({ active, items = ITEMS, onNavigate, phone, sticky = true, style }) {
  const [open, setOpen] = React.useState(false);
  const go = (it) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(it); setOpen(false); } };
  return (
    <header className="ebz-header" style={{ position: sticky ? 'sticky' : 'relative', ...style }}>
      <div className="ebz-container">
        <div className="ebz-header__in">
          <a href="#" onClick={go('Inicio')} aria-label="EBENEZER inicio"><Logo type="imagotipo" variant="white" height={40} /></a>
          <nav className="ebz-header__nav" aria-label="Principal">
            {items.map((it) => (
              <a key={it} href="#" className="ebz-header__link" aria-current={active === it ? 'page' : undefined} onClick={go(it)}>{it}</a>
            ))}
          </nav>
          <WhatsAppButton size="sm" phone={phone}><span className="ebz-header__cta-label">WhatsApp</span></WhatsAppButton>
          <IconButton className="ebz-header__burger" icon={open ? 'x' : 'menu'} label="Menú" onClick={() => setOpen(!open)} />
        </div>
        {open && (
          <nav className="ebz-mnav" aria-label="Móvil">
            {items.map((it) => <a key={it} href="#" onClick={go(it)}>{it}</a>)}
          </nav>
        )}
      </div>
    </header>
  );
}
