import React from 'react';

import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }

  function handleChange() {
    //
  }

  return (
    <LoginForm
      onClick={handleClick}
      onChange={handleChange}
    />
  );
}
