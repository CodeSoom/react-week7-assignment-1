import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin, setLoginFields } from './actions';
import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields'));

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
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
