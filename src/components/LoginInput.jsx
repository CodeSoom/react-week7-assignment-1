import React from 'react';

export default function LoginInput({ placeholder, value, onChange }) {
  return (
    <>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
      <p>{value ? 'green' : 'red'}</p>
    </>
  );
}
