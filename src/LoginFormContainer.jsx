import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginFields,
  login,
  logout,
} from './actions';

import { deleteToken } from './services/accessTokenRepository';

import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const {
    loginFields,
    accessToken,
  } = useSelector((state) => (state));

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleLogin() {
    dispatch(login());
  }

  function handleLogout() {
    dispatch(logout());
    deleteToken();
  }

  return (
    (accessToken === '')
      ? (
        <LoginForm
          loginFields={loginFields}
          onChange={handleChange}
          onClick={handleLogin}
        />
      )
      : (
        <LogoutButton onClick={handleLogout} />
      )
  );
}
