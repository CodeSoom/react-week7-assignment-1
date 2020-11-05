import React from 'react';

export default function Input({
  name, value, type, id, children, onChange,
}) {
  function handleChange(event) {
    const { target } = event;
    onChange({ name: target.name, value: target.value });
  }
  return (
    <div>
      <label htmlFor={id}>
        {children}
      </label>
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
