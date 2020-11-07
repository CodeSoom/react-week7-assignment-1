import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginFields,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginContainer() {
  const dispatch = useDispatch();
  const {
    email,
    password,
  } = useSelector((state) => state.loginFields);

  const handleChange = ({
    name,
    value,
  }) => {
    dispatch(changeLoginFields({ name, value }));
  };

  const handleSubmit = () => {
    dispatch();
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
