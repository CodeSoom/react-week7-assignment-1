import React from 'react';

export default function LoginForm() {
  return (
    <>
      <h1>Log in</h1>
      <label htmlFor="login-email">E-mail</label>
      <input type="email" id="login-email" />

      <label htmlFor="login-password">Password</label>
      <input type="password" id="login-password" />

      <button type="button">Login</button>
    </>
  );
}
