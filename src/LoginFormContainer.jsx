import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginFields } from './actions';

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

  const fields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  if (accessToken) {
    return (
      <button
        type="button"
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
