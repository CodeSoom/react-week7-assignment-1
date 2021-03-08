import React from 'react';

export default function LoginForm({ userLoginInputs, onChange, onSubmit }) {
  const { email, password } = userLoginInputs;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <h2>Log In</h2>
      <label htmlFor="login-email">E-mail</label>
      <input
        value={email}
        type="email"
        id="login-email"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="login-password">Password</label>
      <input
        value={password}
        type="password"
        id="login-password"
        name="password"
        onChange={handleChange}
      />
      <button type="button" onClick={onSubmit}>Log In</button>
    </>
  );
}
