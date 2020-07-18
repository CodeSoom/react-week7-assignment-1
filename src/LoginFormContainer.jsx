import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Logout from './Logout';
import LoginForm from './LoginForm';

import {
  changeLoginFields,
  requestLogin,
  logout,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(changeLoginFields({ name, value }));
  }

  function handleClickLogout() {
    dispatch(logout(null));
  }

  function handleClickLogin() {
    dispatch(requestLogin());
  }

  return (
    <>
      <h2>Log in</h2>
      {accessToken
        ? (
          <Logout
            onClick={handleClickLogout}
          />
        )
        : (
          <LoginForm
            onChange={handleChange}
            onClick={handleClickLogin}
            loginFields={loginFields}
          />
        )}
    </>
  );
}
