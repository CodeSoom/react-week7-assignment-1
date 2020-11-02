import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }

  function handleChange() {
    // dispatch(changeLoginFields());
  }

  const fields = useSelector(get('loginFields'));

  return (
    <LoginForm
      fields={fields}
      onClick={handleClick}
      onChange={handleChange}
    />
  );
}
