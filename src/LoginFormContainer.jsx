import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestLogin());
  };

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
}
