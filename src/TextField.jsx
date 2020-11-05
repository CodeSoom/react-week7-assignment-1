import React from 'react';

export default function TextField({ label, name, value }) {
  const id = `input-${name}`;
  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={value}
      />
    </>
  );
}
