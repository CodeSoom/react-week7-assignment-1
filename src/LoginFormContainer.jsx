import React from 'react';
import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
}
