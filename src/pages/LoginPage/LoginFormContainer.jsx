import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { userLoginInputs } = useSelector((state) => ({
    userLoginInputs: state.userLoginInputs,
  }));

  function handleChange() {
    dispatch();
  }

  function handleClick() {
    dispatch();
  }

  return (
    <LoginForm
      userLoginInputs={userLoginInputs}
      onChange={handleChange}
      onSubmit={handleClick}
    />
  );
}
