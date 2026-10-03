import React from 'react';
export function Breadcrumbs({ items = [], style }) {
  return (
    <nav aria-label="Migas de pan" style={style}>
      <ol className="ebz-crumbs">
        {items.map((it, i) => (
          <React.Fragment key={i}>
            {i > 0 && <li className="ebz-crumbs__sep" aria-hidden="true" />}
            <li>{i === items.length - 1 ? <span aria-current="page">{it.label}</span> : <a href={it.href || '#'} onClick={it.onClick}>{it.label}</a>}</li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
