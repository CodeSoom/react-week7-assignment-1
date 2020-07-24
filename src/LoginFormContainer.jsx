import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { get } from './utils';

import {
  changeLoginFields,
  requestLogin,
  logout,
} from './actions';

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

  function handleClick() {
    dispatch(logout());
  }
  return (
    <div>
      {
        accessToken ? (
          <LogoutForm onClick={handleClick} />
        ) : (
          <LoginForm
            fields={{ email, password }}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )
      }
    </div>
  );
}
