import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const loginFields = useSelector(get('loginFields'));
  // TODO: deletethis
  const accessToken = useSelector(get('accessToken'));

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  return (
    <>
      <p>
        {accessToken || 'not logged in'}
      </p>
      <LoginForm
        fields={loginFields}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
}
