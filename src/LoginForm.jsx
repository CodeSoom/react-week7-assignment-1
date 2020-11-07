import React from 'react';

export default function LoginForm({ email, password }) {
  return (
    <>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={onchange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={onchange}
        />
      </div>
      <button
        type="button"
        onClick={onsubmit}
      >
        Log In
      </button>
    </>
  );
}
