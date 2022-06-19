import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginField } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

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

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <p>{accessToken}</p>
    </>
  );
}
