import React from 'react';

export default function InputField({
  label, name, value, onChange,
}) {
  const id = `inputField-${name}`;

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type="email"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
