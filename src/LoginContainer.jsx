import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { changeLoginFields, requestLogin } from './actions';
import { get } from './utils';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ value, name }) {
    dispatch(changeLoginFields({ value, name }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(requestLogin());
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
