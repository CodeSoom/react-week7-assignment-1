import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
  logout ,
} from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

function LogoutForm({ onClick }) {
  return (
    <button
    type="button"
    onClick={onClick}
    >Log out</button>
  )
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin())
    //TODO : 로그인 성공하면 -> localstorage에 저장
  }

  function handleClickLogout() {
    dispatch(logout());
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
    </>
  );
}
