import React from 'react';

export default function LogoutForm({ onSubmit }) {
  return (
    <>
      <button type="button" onClick={onSubmit}>Log Out</button>
    </>
  );
}
