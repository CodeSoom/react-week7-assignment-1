import React from 'react';

export default function TextField({
  label, id, type = 'text', name, inputValue, onChange,
}) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
