import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { get } from './utils';

import {
  changeLoginFields,
  requestLogin,
} from './actions';

import LoginForm from './LoginForm';

import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={() => {}} />
      ) : (
        <LoginForm
          fields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
