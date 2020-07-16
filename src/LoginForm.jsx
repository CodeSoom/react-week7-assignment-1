import React from 'react';

export default function LoginForm({ loginFields, ChangeLoginField, SubmitLoginField }) {
  const { email, password } = loginFields;

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" onChange={ChangeLoginField} name="email" value={email} />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" onChange={ChangeLoginField} name="password" value={password} />
      </div>
      <button type="button" onClick={SubmitLoginField}>LogIn</button>
    </>
  );
}
