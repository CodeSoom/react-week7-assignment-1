import React from 'react';

import { useDispatch } from 'react-redux';

import { requestLogin } from '../modules/actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const onSubmit = () => {
    // TODO dispatch
    dispatch(requestLogin());
  };
  return (
    <>
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
      <button type="button" onClick={onSubmit}>Log In</button>
    </>
  );
}
