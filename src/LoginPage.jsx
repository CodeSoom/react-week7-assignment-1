import React from 'react';

export default function LoginPage() {
  return (
    <>
      <h2>Log In</h2>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input
        type="email"
        id="login-email"
        name="email"
      />
      <label htmlFor="login-password">
        Password
      </label>
      <input
        type="password"
        id="login-password"
        name="password"
      />
    </>
  );
}
