import React from 'react';

export default function LoginForm({ onClick, onChange }) {
  return (
    <>
      <div>
        <label htmlFor="login-email" onChange={onChange}>
          E-mail
          <input type="email" id="login-email" />
        </label>
        <label htmlFor="login-password">
          Password
          <input type="password" id="login-password" />
        </label>
      </div>
      <button type="button" onClick={onClick}>
        Log In
      </button>
    </>
  );
}
