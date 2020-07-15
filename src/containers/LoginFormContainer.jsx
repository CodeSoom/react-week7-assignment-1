import React from 'react';

export default function LoginFormContainer() {
  return (
    <div>
      <div>
        <label htmlFor="login-email">E-Mail</label>
        <input type="email" name="login-email" id="login-email" />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" name="login-password" id="login-password" />
      </div>
    </div>
  );
}
