import React from 'react';

export default function LoginForm({ onChange, onSubmit, loginFields: { email, password } }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">
        email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={onChange}
        value={email}
      />
      <label htmlFor="password">
        password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={onChange}
        value={password}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
