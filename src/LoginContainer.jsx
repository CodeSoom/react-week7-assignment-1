import React from 'react';

export default function LoginContainer() {
  return (
    <div>
      <label htmlFor="input-email">Email</label>
      <input type="email" id="input-email" />
      <label htmlFor="input-password">Password</label>
      <input type="password" id="input-password" />
      <button type="button">Log In</button>
    </div>
  );
}
