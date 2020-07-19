import React from 'react';

export default function LogoutForm({ onClick }) {
  return (
    <>
      <button
        type="submit"
        onClick={onClick}
      >
        Logout
      </button>
    </>
  );
}
