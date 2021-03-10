import React from 'react';

const initialInputs = {
  email: 'previousEmail@example.com',
  password: 'previousPassword123',
};

export default function LoginForm({
  loginInputs = initialInputs, onChange, onClick,
}) {
  const { email, password } = loginInputs;

  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="login-email">E-mail</label>
      <input
        type="email"
        id="login-email"
        value={email}
        onChange={onChange}
      />

      <label htmlFor="login-password">Password</label>
      <input
        type="password"
        id="login-password"
        value={password}
        onChange={onChange}
      />

      <button
        type="button"
        onClick={onClick}
      >
        Login
      </button>
    </>
  );
}
