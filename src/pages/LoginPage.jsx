import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">E-Mail</label>
        <input type="email" name="login-email" id="login-email" />

        <label htmlFor="login-password">Password</label>
        <input type="password" name="login-password" id="login-password" />
      </div>
    </div>
  );
}
