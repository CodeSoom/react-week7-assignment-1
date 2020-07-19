import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';

import LogoutForm from '../components/LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../actions';

import { get } from '../utils';

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
    dispatch(logout());
  }

  return (
    <>
      { accessToken
        ? (
          <LogoutForm
            onClick={handleClickLogout}
          />
        )
        : (
          <LoginForm
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
    </>
  );
}
