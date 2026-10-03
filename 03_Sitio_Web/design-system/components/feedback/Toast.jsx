import React from 'react';
import { Icon } from '../brand/Icon.jsx';
const ICONS = { success: 'check', warning: 'triangle-alert', error: 'circle-x', info: 'info', brand: 'bell' };
export function Toast({ tone = 'success', title, message, duration = 5000, onClose, style }) {
  React.useEffect(() => {
    if (!onClose || !duration) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);
  return (
    <div className={'ebz-toast ebz-toast--' + tone} role={tone === 'error' ? 'alert' : 'status'} style={style}>
      <span className="ebz-toast__icon"><Icon name={ICONS[tone]} size={16} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="ebz-toast__title">{title}</div>
        {message && <div className="ebz-toast__msg">{message}</div>}
      </div>
      {onClose && <button type="button" onClick={onClose} aria-label="Cerrar" style={{ border: 0, background: 'none', color: 'var(--grafito-400)', cursor: 'pointer', padding: 2 }}><Icon name="x" size={16} /></button>}
      {duration ? <span className="ebz-toast__bar" style={{ animation: 'ebz-toast-bar ' + duration + 'ms linear forwards' }} /> : null}
      <style>{'@keyframes ebz-toast-bar{from{transform:scaleX(1)}to{transform:scaleX(0)}}'}</style>
    </div>
  );
}
