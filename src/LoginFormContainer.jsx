import React from 'react';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const email = '';
  const password = '';

  return (
    <LoginForm fields={{ email, password }} />
  );
}
