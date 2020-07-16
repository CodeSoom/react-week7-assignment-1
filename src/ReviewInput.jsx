import React from 'react';

export default function ReviewInput({
  label, type = 'text', name, onChange, value,
}) {
  function handleChange(event) {
    onChange({ name, value: event.target.value });
  }

  return (
    <div>
      <label htmlFor={`review-${name}`}>{label}</label>
      <input
        type={type}
        name={name}
        id={`review-${name}`}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
