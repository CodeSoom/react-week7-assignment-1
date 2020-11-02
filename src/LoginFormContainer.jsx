import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeLoginField } from './actions';
import { get } from './utils';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleSubmit() {
    // TODO: form dispatch 작성
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
}
