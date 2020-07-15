import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChangeLoginField(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
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
      <button type="button">LogIn</button>
    </>
  );
}
