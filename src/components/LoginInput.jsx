import React from 'react';

export default function LoginInput({ value }) {
  return (
    <>
      <input type="text" value={value} />
      <p>{value ? 'green' : 'red'}</p>
    </>
  );
}
