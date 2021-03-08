import React from 'react';

export default function LoginForm({ field, onChange, onClick }) {
  const { email, password } = field;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={handleChange}
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
