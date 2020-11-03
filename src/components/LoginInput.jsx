import React from 'react';

export default function LoginInput({ value, onChange }) {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <p>{value ? 'green' : 'red'}</p>
    </>
  );
}
