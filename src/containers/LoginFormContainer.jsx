import React from 'react';

import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';

import { requestLogin } from '../modules/actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(requestLogin());
  };
  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
