import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <label htmlFor="login-email">
        E-mail
        <input type="email" id="login-email" />
      </label>
      <label htmlFor="login-password">
        Password
        <input type="password" id="login-password" />
      </label>
    </div>
  );
}
