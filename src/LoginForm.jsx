import React from 'react';

export default function LoginForm({ onClick }) {
  return (
    <div>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          type="text"
          id="email-input"
        />
      </div>
      <div>
        <label htmlFor="password-input">
          Password
        </label>
        <input
          type="text"
          id="password-input"
        />
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        로그인
      </button>
    </div>
  );
}
