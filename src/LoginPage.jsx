import React from 'react';

export default function LoginPage() {
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
