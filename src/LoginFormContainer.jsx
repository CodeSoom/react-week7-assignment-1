import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const fields = useSelector(get('loginField'));

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
