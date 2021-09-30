import React from 'react';

export default function TextField({
  label, name, textValue, type = 'text', onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { value } = event.target;

    onChange({ name, value });
  }

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={textValue}
        onChange={handleChange}
      />
    </>
  );
}
