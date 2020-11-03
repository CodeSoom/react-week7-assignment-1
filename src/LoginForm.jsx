import React from 'react';

export default function LoginForm({ onChange, onSubmit }) {
  function handleChage(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input
        type="email"
        id="login-email"
        name="email"
        onChange={handleChage}
      />
      <label htmlFor="login-password">
        Password
      </label>
      <input
        type="password"
        id="login-password"
        name="password"
        onChange={handleChage}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Login
      </button>
    </div>
  );
}
