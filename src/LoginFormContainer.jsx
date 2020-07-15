import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin, changeLoginField } from './actions';
import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestLogin());
  };

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
