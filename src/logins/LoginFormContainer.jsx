import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../modules/actions';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import { get } from '../modules/utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
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
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <LoginForm
          fields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
      <p>{accessToken}</p>
    </>
  );
}
