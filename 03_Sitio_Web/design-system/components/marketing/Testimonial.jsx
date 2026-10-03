import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function Testimonial({ quote, name, comuna, car, rating = 5, style }) {
  const initials = String(name || '').split(' ').map((s) => s[0]).slice(0, 2).join('');
  return (
    <figure className="ebz-quote" style={{ margin: 0, ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="ebz-quote__mark" aria-hidden="true">“</span>
        {rating ? <span className="ebz-stars" aria-label={rating + ' de 5'}>{Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={15} style={{ opacity: i < rating ? 1 : 0.25 }} />)}</span> : null}
      </div>
      <blockquote className="ebz-quote__text" style={{ margin: 0 }}>{quote}</blockquote>
      <figcaption className="ebz-quote__who">
        <span className="ebz-quote__avatar"><span>{initials}</span></span>
        <span><b style={{ display: 'block', fontSize: 14 }}>{name}</b><span className="ebz-caption">{[comuna, car].filter(Boolean).join(' · ')}</span></span>
      </figcaption>
    </figure>
  );
}
