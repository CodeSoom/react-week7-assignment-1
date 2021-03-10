import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  changeLoginField,
  requestLogin,
  setAccessToken,
} from './actions';

import { get } from './utils';

function LogoutButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  );
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClickLogin() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(setAccessToken(''));
  }

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  return (
    <>
      { accessToken
        ? (
          <LogoutButton
            onClick={handleClickLogout}
          />
        )
        : (
          <LoginForm
            fields={{ email, password }}
            onChange={handleChange}
            onClick={handleClickLogin}
          />
        )}
    </>
  );
}
