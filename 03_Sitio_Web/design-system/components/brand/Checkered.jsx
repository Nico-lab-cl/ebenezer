import React from 'react';
export function Checkered({ size = 10, width = 120, color, className = '', style }) {
  return <div aria-hidden="true" className={'ebz-checkered ' + className} style={{ '--s': size + 'px', '--c': color, width, ...style }} />;
}
