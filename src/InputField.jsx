import React from 'react';

export default function InputField({
  id,
  label,
  type,
  name,
  value,
  onChange,
}) {
  const inputId = `input-field-${id}`;

  return (
    <>
      <label htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
