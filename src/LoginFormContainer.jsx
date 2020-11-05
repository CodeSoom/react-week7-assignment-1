import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
  login,
} from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  function handleChangeLoginField(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(login());
  }

  return (
    <>
      <LoginForm
        loginFields={loginFields}
        onChange={handleChangeLoginField}
        onSubmit={handleSubmit}
      />
    </>
  );
}
