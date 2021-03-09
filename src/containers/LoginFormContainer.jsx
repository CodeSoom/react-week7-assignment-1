import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from '@components/LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    dispatch();
  }
  return (
    <LoginForm onChange={handleChange} />
  );
}
