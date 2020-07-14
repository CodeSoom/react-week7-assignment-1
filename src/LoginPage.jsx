import React from 'react';

function LoginContainer({ onChange }) {
  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" />
      </div>
    </>
  );
}

export default function LoginPage({ onChange }) {
  return (
    <LoginContainer onChange={onChange} />
  );
}
