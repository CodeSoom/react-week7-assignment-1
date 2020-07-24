import React from 'react';

export default function TextField({
  type = 'text',
  label,
  name,
  value,
  onChange,
}) {
  const id = `input-${name}`;
  function handleChange(event) {
    const { target: { value: inputValue } } = event;
    onChange({ name, value: inputValue });
  }
  return (
    <>
      <label htmlFor={id}>{ label }</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
