import React from 'react';

export default function LoginForm({ onChange }) {
  return (
    <>
      <div>
        <label htmlFor="login-email">Email</label>
        <input type="email" name="email" id="login-email" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" name="password" id="login-password" onChange={onChange} />
      </div>
      <button type="button">Login</button>
    </>
  );
}
