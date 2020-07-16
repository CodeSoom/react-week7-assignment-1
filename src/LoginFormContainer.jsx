import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { changeLoginField } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const email = '';
  const password = '';

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
    />
  );
}
