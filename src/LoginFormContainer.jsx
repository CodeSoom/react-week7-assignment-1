import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeLoginField, requestLogin } from './actions';
import { get } from './utils';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      {/* TODO: 추후 수정 */}
      <p>{accessToken}</p>
    </>
  );
}
