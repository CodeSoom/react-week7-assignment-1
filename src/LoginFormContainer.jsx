import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
  changeLoginFields,
} from './actions';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <>
      {
        accessToken ? (
          <LogoutForm />
        ) : (
          <LoginForm
            loginFields={{ email, password }}
            onSubmit={handleSubmit}
            onChange={handleChange}
            accessToken={accessToken}
          />
        )
      }

    </>
  );
}
