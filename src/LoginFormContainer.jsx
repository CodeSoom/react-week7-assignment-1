import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
  changeLoginFields,
} from './actions';

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

  function handleClickLogout() {
    dispatch({ type: 'logout' });
  }

  const fields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  return (
    <>
      { accessToken
        ? (<LogoutForm onClick={handleClickLogout} />)
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
