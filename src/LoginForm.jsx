import React from 'react';

export default function LoginForm({ onClick, onChange }) {
  const handleChange = (event) => {
    const { target: { name, value } } = event;

    onChange({ name, value });
  };

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
          <input
            id="login-email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="login-password">
          Password
          <input
            id="login-password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="button" onClick={onClick}>
        Log In
      </button>
    </>
  );
}
