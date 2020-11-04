import React from 'react';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="text"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          password
        </label>
        <input
          type="text"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
