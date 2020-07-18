import React from 'react';

export default function LoginForm({ onSubmit }) {
  return (
    <>
      <div>
        <label htmlFor="login-email">
          Email
        </label>
        <input type="email" id="login-email" />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Login
      </button>
    </>
  );
}
