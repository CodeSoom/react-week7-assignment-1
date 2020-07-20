import React from 'react';

export default function LogoutButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  );
}
