import React from 'react';

export default function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input id="password" type="password" />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
