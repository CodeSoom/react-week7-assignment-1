import React from 'react';

export default function LogoutForm({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      로그아웃
    </button>
  );
}
