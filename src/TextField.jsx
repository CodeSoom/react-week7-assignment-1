import React from 'react';

export default function TextField({
  label, name, type, value, onChange,
}) {
  const id = `input-control-${name}`;

  const handleChange = (e) => {
    onChange({ name, value: e.target.value });
  };

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
