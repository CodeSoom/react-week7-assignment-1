import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestLogin , changeLoginField } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    // click
    dsipatch(requestLogin());
  }

  return (
    <LoginForm 
      fields={{ email, password}}
      onSubmit={handleSubmit}
      onChange={handleChange} 
    />
  );
}