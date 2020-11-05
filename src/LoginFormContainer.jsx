import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const loginFields = useSelector(get('loginFields'));

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(requestLogin());
    history.push('/');
  };

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  return (
    <LoginForm
      fields={loginFields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
