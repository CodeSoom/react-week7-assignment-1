import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm onClick={handleClick} />
  );
}
