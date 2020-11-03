import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { changeLoginField } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleClick = () => {
    // TODO: fetch login() action
    dispatch();
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  return (
    <LoginForm onClick={handleClick} onChange={handleChange} />
  );
}
