import React from 'react';
import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginPage() {
  const loginFields = useSelector(get('loginFields'));

  function handleChange() {
    //
  }

  function handleSubmit() {
    //
  }
  return (
    <>
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        fields={loginFields}
      />
    </>
  );
}
