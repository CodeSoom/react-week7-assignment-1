import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
  setAccessToken,
} from '_redux/actions';

import LoginForm from '../presentational/LoginForm';

import { get } from '../utils';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginField'));
  const accessToken = useSelector(get('accessToken'));

  function handleChangeLoginFields({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClickLoginButton() {
    dispatch(requestLogin());
  }

  function handleClickLogoutButton() {
    dispatch(setAccessToken(''));
    ['email', 'password'].forEach((name) => {
      dispatch(changeLoginField({ name, value: '' }));
    });
  }

  if (accessToken) {
    return (
      <button type="button" onClick={handleClickLogoutButton}>Log out</button>
    );
  }

  return (
    <>
      <LoginForm
        email={email}
        password={password}
        onChange={handleChangeLoginFields}
        onClick={handleClickLoginButton}
      />
    </>
  );
}
