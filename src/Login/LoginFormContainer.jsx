import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
  login,
} from '../store/actions';

import { get } from '../utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChangeLoginField(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmitLoginField() {
    dispatch(login());
  }

  return (
    <>
      <LoginForm
        loginFields={loginFields}
        onChangeLoginField={handleChangeLoginField}
        onSubmitLoginField={handleSubmitLoginField}
      />
      <p>{accessToken}</p>
    </>
  );
}
