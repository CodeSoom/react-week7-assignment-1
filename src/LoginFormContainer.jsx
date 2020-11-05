import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
  logout,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const loginFields = useSelector(get('loginFields'));
  const isLoggedIn = useSelector(get('accessToken')) !== null;

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleClickLogOut = () => {
    dispatch(logout());
  };

  if (isLoggedIn) {
    return (
      <button type="button" onClick={handleClickLogOut}>
        Log out
      </button>
    );
  }

  return (
    <LoginForm
      fields={loginFields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
