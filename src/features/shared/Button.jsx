import React from 'react';

export default function Button({
  value = '', onClick, children,
}) {
  return (
    <button type="button" value={value} onClick={onClick}>{children}</button>
  );
}
