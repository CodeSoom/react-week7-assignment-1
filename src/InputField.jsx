import React from 'react';

export default function InputField({
  id,
  label,
  type,
  name,
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
        onChange={onChange}
      />
    </>
  );
}
