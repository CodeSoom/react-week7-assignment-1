import React from 'react';

export default function InputField({
  label, type = 'text', name, value = '', onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
