import React from 'react';

export default function LoginPage() {
  return (
    <>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input
        id="login-email"
        type="email"
        name="email"
      />
      <label htmlFor="login-password">
        Password
      </label>
      <input
        id="login-password"
        type="password"
        name="password"
      />
    </>
  );
}
