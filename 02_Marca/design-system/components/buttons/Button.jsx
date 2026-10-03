import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function Button({ variant = 'primary', size = 'md', block, icon, iconRight, loading, disabled, href, target, type = 'button', onClick, children, className = '', style, ...rest }) {
  const cls = ['ebz-btn', 'ebz-btn--' + variant, size !== 'md' && 'ebz-btn--' + size, block && 'ebz-btn--block', loading && 'ebz-btn--loading', className].filter(Boolean).join(' ');
  const isz = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;
  const inner = (
    <>
      <span className="ebz-btn__in">
        {icon && <Icon name={icon} size={isz} />}
        {children}
        {iconRight && <Icon name={iconRight} size={isz} />}
      </span>
      {loading && <span className="ebz-btn__spinner" aria-hidden="true" />}
    </>
  );
  if (href) return <a className={cls} href={href} target={target} rel={target === '_blank' ? 'noopener' : undefined} aria-disabled={disabled || undefined} onClick={onClick} style={style} {...rest}>{inner}</a>;
  return <button className={cls} type={type} disabled={disabled} aria-busy={loading || undefined} onClick={onClick} style={style} {...rest}>{inner}</button>;
}
