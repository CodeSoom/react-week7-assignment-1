import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginField, logout } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <>
          <LoginForm
            fields={{ email, password }}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <p>{accessToken}</p>
        </>
      )}
    </>
  );
}
