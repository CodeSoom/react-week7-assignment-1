import React from 'react';

export default function ReviewInput({
  label, type = 'text', name, onChange, value,
}) {
  return (
    <div>
      <label htmlFor={`review-${name}`}>{label}</label>
      <input
        type={type}
        name={name}
        id={`review-${name}`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
