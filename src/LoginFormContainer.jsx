import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { changeLoginField, requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const email = '';
  const password = '';

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
