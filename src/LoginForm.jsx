import React from 'react';

export default function LoginForm({ onClick, onChange }) {
  return (
    <div>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          type="text"
          id="email-input"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password-input">
          Password
        </label>
        <input
          type="text"
          id="password-input"
          onChange={onChange}
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
