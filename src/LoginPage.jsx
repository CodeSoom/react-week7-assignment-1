import React from 'react';

export function LoginFormContainer() {
  return (
    <div>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" />
      </div>
      <button type="button">로그인</button>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <h2>LogIn</h2>
      <LoginFormContainer />
    </>
  );
}
