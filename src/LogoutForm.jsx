import React from 'react';

export default function LogoutForm({ email, onClick }) {
  return (
    <>
      <p>
        {email}
      </p>
      <p>
        환영합니다!
      </p>
      <button
        type="button"
        onClick={onClick}
      >
        로그아웃
      </button>
    </>
  );
}