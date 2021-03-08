import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateUserLoginInputs } from '../../actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { userLoginInputs } = useSelector((state) => ({
    userLoginInputs: state.userLoginInputs,
  }));

  function handleChange({ name, value }) {
    dispatch(updateUserLoginInputs(name, value));
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
