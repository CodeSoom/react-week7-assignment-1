import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { get } from './utils';

import {
  changeLoginFields,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }
  return (
    <div>
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
      />
    </div>
  );
}
