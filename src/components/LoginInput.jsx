import React from 'react';

export default function LoginInput({
  type, placeholder, value, onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-invalid={!value}
    />
  );
}
