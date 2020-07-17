import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const { email, password } = useSelector(get('loginFields'));

  return (
    <LoginForm fields={{ email, password }} />
  );
}
