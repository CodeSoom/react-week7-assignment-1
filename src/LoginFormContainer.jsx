import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    // TODO: dispatch(logout())
  }

  return (
    <>
      { accessToken
        ? (
          <LoginForm
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )
        : (
          <LogoutForm
            onClick={handleClickLogout}
          />
        )}
    </>
  );
}
