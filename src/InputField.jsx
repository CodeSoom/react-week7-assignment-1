import React from 'react';

export default function InputField({
  label, type, name, value, onChange,
}) {
  const id = `inputField-${name}`;

  function handleChange(event) {
    const { target: { value: changedValue } } = event;

    onChange({ name, value: changedValue });
  }

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
