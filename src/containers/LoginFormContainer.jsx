import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';
import LogoutForm from '../components/LogoutForm';

import { get } from '../utils';

import {
  requestLogin,
  setLoginFields,
} from '../modules/actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
  };

  return (
    <>
      {accessToken
        ? (
          <LogoutForm />
        )
        : (
          <LoginForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            fields={loginFields}
          />
        )}
    </>
  );
}
