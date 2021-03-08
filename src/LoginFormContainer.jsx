import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  changeLoginField,
  requestLogin,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  const { email, password } = useSelector(get('loginFields'));

  return (
    <LoginForm
      field={{ email, password }}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
