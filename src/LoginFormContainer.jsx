import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

export default function LoginFormContainer() {
  // TDDO: delete this!
  const fields = {
    email: 'test@test.com',
    password: '1234',
  };

  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      fields={fields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
