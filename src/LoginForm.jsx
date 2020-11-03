import React from 'react';

export default function LoginForm({ onSubmit }) {
  return (
    <div>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input type="email" id="login-email" />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="email" id="login-password" />
      <button
        type="button"
        onClick={onSubmit}
      >
        Login
      </button>
    </div>
  );
}
