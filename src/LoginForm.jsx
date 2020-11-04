import React from 'react';

export default function LoginForm({ fields, onSubmit, onChange }) {
  const { email, password } = fields;

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
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="login-password">
          Password
          <input
            id="login-password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSubmit}>
        Log In
      </button>
    </>
  );
}
