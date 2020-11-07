import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestLogin } from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    // click
    dsipatch(requestLogin());
  }

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
}