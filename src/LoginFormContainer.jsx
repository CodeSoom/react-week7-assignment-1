import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
  login,
  logout,
} from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChangeLoginField(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(login());
  }

  function handleClickLogout() {
    dispatch(logout());
  }

  function LogoutForm({ onClick }) {
    return (
      <button type="button" onClick={onClick}>
        로그아웃
      </button>
    );
  }

  return (
    <>
      { accessToken ? (<LogoutForm onClick={handleClickLogout} />)
        : (
          <LoginForm
            loginFields={loginFields}
            onChange={handleChangeLoginField}
            onSubmit={handleSubmit}
          />
        )}
    </>
  );
}
