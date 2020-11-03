import React from 'react';

import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <div>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input type="email" id="login-email" />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="email" id="login-password" />
      <button
        type="button"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
}
