import React from 'react';

export default function InputField({
  label, type, name, field, onChange,
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
        type={type || 'text'}
        id={id}
        name={name}
        onChange={handleChange}
        value={field}
      />
    </div>
  );
}
