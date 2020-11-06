import React from 'react';

function TextField({
  label, type = 'text', name, onChange, inputValue,
}) {
  const id = `input-${name}`;

  const handleChange = (event) => {
    const { target: { value } } = event;
    onChange({ name, value });
  };

  return (
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
  );
}

export default TextField;
