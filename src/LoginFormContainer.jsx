import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginFields } from './actions';

import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleChange = ({ target: { name, value } }) => {
    dispatch(changeLoginFields({ name, value }));
  };

  return (
    <LoginForm fields={{ email, password }} onSubmit={handleSubmit} onChange={handleChange} />
  );
}
