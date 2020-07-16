import React from 'react';

export default function LoginForm({ onChange, onSubmit, fields }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          name="email"
          id="login-email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          name="password"
          id="login-password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <button type="button" onClick={onSubmit}>Login</button>
    </>
  );
}
