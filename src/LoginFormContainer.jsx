import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
    // TODO: 로그인 성공하면 -> localStorage에 저장
  }

  function handleClickLogout() {
    dispatch(logout());
    // TODO: 로그인 성공하면 -> localStorage에 저장
  }

  return (
    <>
      {
        accessToken ? (
          <LogoutForm onClick={handleClickLogout} />
        ) : (
          <LoginForm
            loginFields={{ email, password }}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )
      }

    </>
  );
}
