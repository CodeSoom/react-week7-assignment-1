import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input type="email" id="login-email"></input>
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" id="login-password"></input>
      </div>
    </div>
  );
}
