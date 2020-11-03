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
            type="email"
            id="login-email"
            name="email"
            onChange={handleChange}
          />
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
