import React from 'react';

export default function LogoutForm({ onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
      >
        Log out
      </button>
    </div>
  );
}
