import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
  setAccessToken,
} from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmitLogin() {
    dispatch(requestLogin());
  }

  function handleSubmitLogout() {
    dispatch(setAccessToken(''));
  }

  return (
    (accessToken) ? (
      <LogoutForm
        onClick={handleSubmitLogout}
      />
    )
      : (
        <LoginForm
          fields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmitLogin}
        />
      )
  );
}
