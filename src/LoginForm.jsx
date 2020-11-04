import React from 'react';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function handleChage(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChage}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChage}
        />
        <button
          type="button"
          onClick={onSubmit}
        >
          Login
        </button>
      </div>
    </>
  );
}
