import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
} from 'state/actions';
import LoginForm from '../presentational/LoginForm';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const { loginField: { email, password } } = useSelector((state) => ({
    loginField: state.loginField,
  }));

  function handleChangeLoginFields({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClickLoginButton(event) {
    event.preventDefault();

    dispatch(requestLogin());
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChangeLoginFields}
      onSubmit={handleClickLoginButton}
    />
  );
}
