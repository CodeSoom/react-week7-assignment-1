import React from 'react';

export default function LoginForm({ onChange }) {
  return (
    <form>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input
          type="email"
          name="email"
          id="input-email"
          placeholder="email"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          name="password"
          id="input-password"
          placeholder="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
