import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { setLoginInputs } from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const disptach = useDispatch();

  const loginInputs = useSelector(get('loginInputs'));

  function handleChange({ name, value }) {
    disptach(setLoginInputs({ name, value }));
  }

  function handleClick() {
    disptach();
  }

  return (
    <LoginForm
      loginInputs={loginInputs}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
