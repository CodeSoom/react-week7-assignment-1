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

  function handleChangeLoginField(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(login());
  }

  return (
    <div>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChangeLoginField}
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
          onChange={handleChangeLoginField}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        로그인
      </button>
    </div>
  );
}
