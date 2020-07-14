import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  changeLoginFields,
  requestLogin,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(changeLoginFields({ name, value }));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      onChange={handleChange}
      onClick={handleClick}
      loginFields={loginFields}
    />
  );
}
