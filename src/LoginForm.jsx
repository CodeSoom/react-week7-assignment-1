import React from 'react';

export default function LoginForm({ onChange }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ value });
  }

  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="login-email">E-mail</label>
      <input
        type="email"
        id="login-email"
        onChange={handleChange}
      />

      <label htmlFor="login-password">Password</label>
      <input
        type="password"
        id="login-password"
        onChange={handleChange}
      />

      <button type="button">Login</button>
    </>
  );
}
