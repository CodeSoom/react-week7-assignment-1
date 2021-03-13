import React from 'react';

const initialInputs = {
  email: 'previousEmail@example.com',
  password: 'previousPassword123',
};

export default function LoginForm({
  loginInputs = initialInputs, onChange, onClick,
}) {
  const { email, password } = loginInputs;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <h2>Log in 페이지</h2>
      <label htmlFor="login-email">E-mail</label>
      <input
        type="email"
        id="login-email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <label htmlFor="login-password">Password</label>
      <input
        type="password"
        id="login-password"
        name="password"
        value={password}
        onChange={handleChange}
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
