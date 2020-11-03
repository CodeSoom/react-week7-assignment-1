import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginFields, setAccessToken } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClick() {
    dispatch(setAccessToken(''));
  }

  const fields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  if (accessToken) {
    return (
      <button
        type="button"
        onClick={handleClick}
      >
        Log out
      </button>
    );
  }

  return (
    <LoginForm
      fields={fields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
