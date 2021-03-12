import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  updateUserLoginInputs,
  requestLogin,
  resetAccessToken,
} from '../../actions';

import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { userLoginInputs, accessToken } = useSelector((state) => ({
    userLoginInputs: state.userLoginInputs,
    accessToken: state.accessToken,
  }));

  function handleChange({ name, value }) {
    dispatch(updateUserLoginInputs(name, value));
  }

  function handleClick() {
    dispatch(requestLogin());
  }

  function handleLogout() {
    dispatch(resetAccessToken());
  }

  if (accessToken) {
    return (<LogoutButton onClick={handleLogout} />);
  }

  return (
    <LoginForm
      userLoginInputs={userLoginInputs}
      onChange={handleChange}
      onSubmit={handleClick}
    />
  );
}
