import React from 'react';

import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';

export default function LoginContainer() {
  const {
    email,
    password,
  } = useSelector((state) => state.loginFields);

  const handleChange = () => { };

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
    />
  );
}
