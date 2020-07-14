import React from 'react';

export default function LoginForm({
  onChange,
  onClick,
  loginFields: { email, password },
}) {
  return (
    <>
      <p>Log in</p>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={onChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={onChange}
          value={password}
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
