import React from 'react';

export default function TextField({
  type = 'text',
  label,
  name,
  onChange,
}) {
  const id = `input-${name}`;
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
  }
  return (
    <>
      <label htmlFor={id}>{ label }</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
      />
    </>
  );
}
