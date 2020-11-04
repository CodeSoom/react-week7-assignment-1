import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginFields, setAccessToken } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClick() {
    dispatch(setAccessToken(null));
  }

  const fields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  return (
    <>
      { accessToken
        ? (<LogoutForm onClick={handleClick} />)
        : (
          <LoginForm
            fields={fields}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        )}
    </>
  );
}
