import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginField } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

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
        <LogoutForm />)
        : (
          <LoginForm
            fields={loginFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
    </>
  );
}
