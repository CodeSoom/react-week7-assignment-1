import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleClick = () => {
    // TODO: fetch login() action
    dispatch();
  };

  const handleChange = () => {
    dispatch();
  };

  return (
    <LoginForm onClick={handleClick} onChange={handleChange} />
  );
}
