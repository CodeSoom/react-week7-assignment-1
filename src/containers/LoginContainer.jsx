import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { get } from '../utils';
import LoginForm from '../components/LoginForm';
import {
  setId,
  setPassword,
  setUser,
} from '../redux/actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const { id, password } = useSelector(get('user'));

  function handleChangeId(value) {
    dispatch(setId(value));
  }

  function handleChangePassword(value) {
    dispatch(setPassword(value));
  }

  function handleClick() {
    dispatch(setUser());
  }

  return (
    <LoginForm
      id={id}
      password={password}
      onChangeId={handleChangeId}
      onChangePassword={handleChangePassword}
      onClick={handleClick}
    />
  );
}
