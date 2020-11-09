import React from 'react';

export default function LoginForm({ loginFields, onChange, onSubmit }) {
  const { email, password } = loginFields;

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="button" onClick={onSubmit}>
        로그인
      </button>
    </>
  );
}
