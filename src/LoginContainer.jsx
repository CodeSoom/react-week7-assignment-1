import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { changeLoginFields, requestLogin, setAccessToken } from './actions';
import { get } from './utils';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ value, name }) {
    dispatch(changeLoginFields({ value, name }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(requestLogin());
  }

  function handleClick() {
    dispatch(setAccessToken(null));
  }

  return (
    <>
      <LoginForm
        accessToken={accessToken}
        email={email}
        password={password}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
    </>
  );
}
