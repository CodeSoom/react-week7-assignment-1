import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateUserLoginInputs, requestLogin } from '../../actions';

import LoginForm from './LoginForm';

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
    dispatch();
    // 디테일한 action을 추가해야한다.
  }

  if (accessToken) {
    return (
      <button
        type="button"
        onClick={handleLogout}
      >
        Log out
      </button>
    );
  }

  return (
    <>
      <p>{accessToken}</p>
      <LoginForm
        userLoginInputs={userLoginInputs}
        onChange={handleChange}
        onSubmit={handleClick}
      />
    </>
  );
}
