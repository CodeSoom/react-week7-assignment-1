import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { get } from './utils';

import {
  changeLoginField,
  requestLogin,
  logout,
} from './actions';

import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(logout(''));
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm
          onClick={handleClickLogout}
        />
      ) : (
        <LoginForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          fields={loginFields}
        />
      )}
    </>
  );
}
