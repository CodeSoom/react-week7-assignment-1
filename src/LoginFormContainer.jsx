import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginField, logout } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';
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
    dispatch(logout());
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout} />)
        : (
          <LoginForm
            fields={loginFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
    </>
  );
}
