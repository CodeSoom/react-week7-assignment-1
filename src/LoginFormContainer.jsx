import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { get } from './utils';

import {
  changeLoginFields,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
    />
  );
}
