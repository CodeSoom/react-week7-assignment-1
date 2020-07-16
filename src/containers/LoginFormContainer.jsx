import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';

import { get } from '../utils';

import {
  requestLogin,
  setLoginFields,
} from '../modules/actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
  };

  return (
    <>
      <LoginForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        fields={loginFields}
      />
    </>
  );
}
