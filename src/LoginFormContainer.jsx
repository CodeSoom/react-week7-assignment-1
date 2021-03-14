import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
    // TODO: 로그인 성공하면 localstorage에 저장
  }

  return (
    <div>
      <LoginForm
        fields={loginFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>{accessToken}</p>
    </div>
  );
}
