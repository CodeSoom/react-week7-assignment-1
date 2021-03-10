import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { changeLoginFields } from './actions';
import { get } from './utils';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ value, name }) {
    dispatch(changeLoginFields({ value, name }));
  }

  return (
    <LoginForm onChange={handleChange} email={email} password={password} />
  );
}
