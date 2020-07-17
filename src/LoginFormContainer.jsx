import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin, setLoginFields, requestLogout } from './actions';
import { get } from './utils';
import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(requestLogin());
  };

  const handleSubmitLogout = (e) => {
    e.preventDefault();
    dispatch(requestLogout());
  };

  if (accessToken) {
    return (<LogoutForm onSubmit={handleSubmitLogout} />);
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onSubmit={handleSubmitLogin}
    />
  );
}
