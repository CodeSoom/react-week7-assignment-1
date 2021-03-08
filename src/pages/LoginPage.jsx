import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <label htmlFor="email">
        email
      </label>
      <input type="email" id="email" />
      <label htmlFor="password">
        password
      </label>
      <input type="password" id="password" />
    </div>
  );
}
