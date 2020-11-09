import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { get } from '../utils';
import LoginForm from '../components/LoginForm';
import {
  setEmail,
  setPassword,
  requestLogin,
  deleteAccessToken,
} from '../redux/actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));
  const email = useSelector(get('email'));
  const password = useSelector(get('password'));

  function handleChangeEmail(value) {
    dispatch(setEmail(value));
  }

  function handleChangePassword(value) {
    dispatch(setPassword(value));
  }

  function handleClickLogin() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(deleteAccessToken());
  }

  return (
    <>
      {
        accessToken
          ? (
            <button
              type="button"
              onClick={handleClickLogout}
            >
              Log out
            </button>
          )
          : (
            <LoginForm
              email={email}
              password={password}
              onChangeEmail={handleChangeEmail}
              onChangePassword={handleChangePassword}
              onClick={handleClickLogin}
            />
          )
      }
    </>
  );
}
