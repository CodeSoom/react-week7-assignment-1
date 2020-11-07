import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { get } from './utils';

import {
  changeLoginField,
  requestLogin,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm />
      ) : (
        <LoginForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          fields={loginFields}
        />
      )}
    </>
  );
}
