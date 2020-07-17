import React from 'react';

export default function LogoutForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">Log out</button>
    </form>
  );
}
