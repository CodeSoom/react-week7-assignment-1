import React from 'react';

export default function LoginForm({ fields, onClick, onChange }) {
  const { email, password } = fields;

  return (
    <div>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          type="text"
          id="email-input"
          value={email}
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
          value={password}
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
