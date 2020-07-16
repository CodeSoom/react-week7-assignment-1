import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';
import LogoutForm from '../components/LogoutForm';

import { get } from '../utils';

import {
  requestLogin,
  setAccessToken,
  setLoginFields,
} from '../modules/actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleLoginSubmit = () => {
    dispatch(requestLogin());
  };

  const handleLogoutSubmit = () => {
    dispatch(setAccessToken(''));
  };

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
  };

  return (
    <>
      {accessToken
        ? (
          <LogoutForm onSubmit={handleLogoutSubmit} />
        )
        : (
          <LoginForm
            onSubmit={handleLoginSubmit}
            onChange={handleChange}
            fields={loginFields}
          />
        )}
    </>
  );
}
