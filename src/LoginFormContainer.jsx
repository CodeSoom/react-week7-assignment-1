import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
  login,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChangeLoginField(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmitLoginField() {
    dispatch(login());
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" onChange={handleChangeLoginField} name="email" value={email} />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" onChange={handleChangeLoginField} name="password" value={password} />
      </div>
      <button type="button" onClick={handleSubmitLoginField}>LogIn</button>
      <p>{accessToken}</p>
    </>
  );
}
