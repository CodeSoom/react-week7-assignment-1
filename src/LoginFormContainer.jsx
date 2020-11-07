import React from 'react';

import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { get } from './utils';

// TODO : dispatch, useSelector

export default function LoginFormContainer() {
  const loginFields = useSelector(get('loginFields'));

  function handleChange() {
    dispatch(changeLoginField());
  }

  function handleSubmit() {
    // dispatch(requestLogin());
  }

  return (
    <>
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        fields={loginFields}
      />
    </>
  );
}
