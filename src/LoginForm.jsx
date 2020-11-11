import React from 'react';

import ErrorMessage from './ErrorMessage';

export default function LoginForm({
  fields, onChange, onSubmit, error,
}) {
  const ERROR_MESSAGE = '입력이 안된 사항이 있습니다.';
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      {error && <ErrorMessage message={ERROR_MESSAGE} />}
      <div>
        <button
          type="button"
          onClick={onSubmit}
        >
          Log In
        </button>
      </div>
    </>
  );
}
