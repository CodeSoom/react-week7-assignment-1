import React from 'react';

export default function TextField({ label, text, name, onChange }) {
  const handleChange = (event) => {
    const { target: { name, value } } = event;

    onChange({ name, value });
  };

  return (
    <label>
      { label }
      <input
        name={name}
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
