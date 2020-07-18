import React from 'react';

import { useDispatch } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
