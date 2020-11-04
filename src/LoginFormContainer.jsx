import React from 'react';

export default function LoginFormContainer() {
  return (
    <div>
      <h2>Log In</h2>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input type="text" id="input-email" name="email" />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input type="password" id="input-password" name="password" />
      </div>
    </div>
  );
}
