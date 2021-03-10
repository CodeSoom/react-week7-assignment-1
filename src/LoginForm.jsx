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
    const { target: { value } } = event;
    onChange({ value });
  }

  function handleClick() {
    onClick();
  }

  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="login-email">E-mail</label>
      <input
        type="email"
        id="login-email"
        value={email}
        onChange={handleChange}
      />

      <label htmlFor="login-password">Password</label>
      <input
        type="password"
        id="login-password"
        value={password}
        onChange={handleChange}
      />

      <button
        type="button"
        onClick={handleClick}
      >
        Login
      </button>
    </>
  );
}
