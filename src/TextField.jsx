import React from 'react';

export default function TextField({
  label, name, type = 'text', onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target: { value } } = event;

    onChange({ name, value });
  }
  return (
    <>
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
