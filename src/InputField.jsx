import React from 'react';

export default function InputField({
  label, type = 'text', name, field, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
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
        value={field}
      />
    </div>
  );
}
