import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <label htmlFor="email">
        email
      </label>
      <input type="email" id="email" />
      <label htmlFor="password">
        password
      </label>
      <input type="password" id="password" />

      <button>Log In</button>
    </form>
  );
}
