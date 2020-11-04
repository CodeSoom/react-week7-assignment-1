import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const loginFields = useSelector(get('loginFields'));

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  return (
    <LoginForm
      loginFields={loginFields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
