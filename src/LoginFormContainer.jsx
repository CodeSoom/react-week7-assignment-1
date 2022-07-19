import React from 'react';

export default function LoginFormContainer() {
  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input type="button" id="login-email" />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input type="button" id="login-password" />
      </div>
    </>
  );
}
