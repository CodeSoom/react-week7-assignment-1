import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '@components/LoginForm';

import { changeLoginFields, deleteAccessToken, postLoginFields } from 'src/actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { accessToken, loginFields } = useSelector((state) => (
    {
      accessToken: state.accessToken,
      loginFields: state.loginFields,
    }));

  function handleClick() {
    dispatch(deleteAccessToken());
  }

  if (accessToken) {
    return (
      <button type="button" onClick={handleClick}>Log out</button>
    );
  }

  function handleChange({ target: { name, value } }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postLoginFields());
  }

  return (
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
      loginFields={loginFields}
    />
  );
}
