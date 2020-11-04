import React from 'react';

export default function LoginContainer() {
  return (
    <form>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input type="email" name="email" id="login-email" />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" name="password" id="login-password" />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
}
