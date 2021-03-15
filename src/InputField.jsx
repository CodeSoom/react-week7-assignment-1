import React from 'react';

export default function InputField({
  label, type, name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target: { name: targetName, value: targetValue } } = event;
    onChange({ name: targetName, value: targetValue });
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
