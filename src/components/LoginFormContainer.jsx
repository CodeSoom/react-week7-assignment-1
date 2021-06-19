import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestLogin, changeLoginField } from '../redux/actions';
import LoginForm from './LoginForm';
import { get } from '../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFileds'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }
  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }
  return (
    <>
      {' '}
      <LoginForm
        fileds={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>{accessToken}</p>
    </>
  );
}
