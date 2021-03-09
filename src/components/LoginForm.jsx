import React from 'react';

export default function LoginForm({ onChange }) {
  return (
    <form>
      <label htmlFor="email">
        email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={onChange}
      />
      <label htmlFor="password">
        password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={onChange}
      />

      <button type="submit">Log In</button>
    </form>
  );
}
