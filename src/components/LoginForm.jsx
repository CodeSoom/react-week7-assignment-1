import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <label htmlFor="email">
        email
      </label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">
        password
      </label>
      <input type="password" id="password" name="password" />

      <button type="submit">Log In</button>
    </form>
  );
}
