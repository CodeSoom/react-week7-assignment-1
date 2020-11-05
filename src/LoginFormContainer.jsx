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
  // TODO: deletethis
  const accessToken = useSelector(get('accessToken'));

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
