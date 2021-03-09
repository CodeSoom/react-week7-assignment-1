import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from '@components/LoginForm';

import { changeLoginFields } from 'src/actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    dispatch(changeLoginFields({ name, value }));
  }
  return (
    <LoginForm onChange={handleChange} />
  );
}
