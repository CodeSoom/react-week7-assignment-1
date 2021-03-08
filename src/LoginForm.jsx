import React from 'react';

export default function LoginForm({ onChange, onClick }) {
  return (
    <>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        Log In
      </button>
    </>
  );
}
