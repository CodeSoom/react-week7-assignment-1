import React from 'react';

export default function TextField({ label, type, name, value, onChange }) {
  return (
    <div>
    <label htmlFor={`login-${name}`}>
      {label}
    </label>
    <input 
      type={type}
      id={`login-${name}`}
      name={name}
      value={value}
      onChange={onChange}/>
  </div>
  )
}