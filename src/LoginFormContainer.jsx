import React from 'react';

import { useDispatch } from 'react-redux';

import {
  requestLogin,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="text" id="login-email" />
      </div>
      <div>
        <label htmlFor="login-password">
          password
        </label>
        <input type="text" id="login-password" />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        Log In
      </button>
    </>
  );
}
