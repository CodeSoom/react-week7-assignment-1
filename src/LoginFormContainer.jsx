import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch();
    // TODO : dispatch(requestLogin)
  }

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
}
