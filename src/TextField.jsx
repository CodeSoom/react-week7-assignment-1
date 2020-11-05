import React from 'react';

export default function TextField({
  label, name, value, type = 'text',
}) {
  const id = `input-${name}`;
  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
      />
    </>
  );
}
