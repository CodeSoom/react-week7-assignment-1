import React from 'react';

export default function LoginForm({ loginFields, onChangeLoginField, onSubmitLoginField }) {
  const { email, password } = loginFields;

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" onChange={onChangeLoginField} name="email" value={email} />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" onChange={onChangeLoginField} name="password" value={password} />
      </div>
      <button type="button" onClick={onSubmitLoginField}>Log In</button>
    </>
  );
}
