import React from 'react';

export default function LoginForm({ onClick }) {
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
        onClick={onClick}
      >
        Login
      </button>
    </div>
  );
}
