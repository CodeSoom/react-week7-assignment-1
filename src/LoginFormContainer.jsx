import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = { email: '', password: '' };

  // TODO: useSelector(get('loginFields'));

  function handleChange() {
    dispatch(() => {});
    // TODO: changeLoginField actions
  }

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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          type="button"
        >
          Log In
        </button>
      </div>
    </>
  );
}
