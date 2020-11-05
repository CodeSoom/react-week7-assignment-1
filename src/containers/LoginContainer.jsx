import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { get } from '../utils';
import LoginForm from '../components/LoginForm';
import {
  setEmail,
  setPassword,
  requestLogin,
} from '../redux/actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const email = useSelector(get('email'));
  const password = useSelector(get('password'));

  function handleChangeId(value) {
    dispatch(setEmail(value));
  }

  function handleChangePassword(value) {
    dispatch(setPassword(value));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      id={email}
      password={password}
      onChangeId={handleChangeId}
      onChangePassword={handleChangePassword}
      onClick={handleClick}
    />
  );
}
