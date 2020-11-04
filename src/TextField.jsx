import React from 'react';

export default function TextField({
  label, type, text, name, onChange,
}) {
  const id = `input-${name}`;

  const handleChange = (event) => {
    const { value } = event.target;

    onChange({ name, value });
  };

  return (
    <label htmlFor={id}>
      { label }
      <input
        id={id}
        type={type}
        name={name}
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
