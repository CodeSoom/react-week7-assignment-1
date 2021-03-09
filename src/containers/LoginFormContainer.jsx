import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '@components/LoginForm';

import { changeLoginFields, postLoginFields } from 'src/actions';

import LogoutContainer from './LogoutContainer';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { accessToken, loginFields } = useSelector((state) => (
    {
      accessToken: state.accessToken,
      loginFields: state.loginFields,
    }));

  if (accessToken) {
    return <LogoutContainer />;
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
