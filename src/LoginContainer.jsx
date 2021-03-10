import React from 'react';
import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { changeLoginFields } from './actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  function handleChange({ value, name }) {
    dispatch(changeLoginFields({ value, name }));
  }

  return (
    <LoginForm onChange={handleChange} />
  );
}
