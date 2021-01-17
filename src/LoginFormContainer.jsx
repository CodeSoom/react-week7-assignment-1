import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestLogin , changeLoginFields, setAccessToken, logout } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

import LogoutForm from './LogoutForm';

import { deleteItem } from './services/storage';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleSubmit() {
    // click
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(logout());

    deleteItem('accessToken');
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout}/>
      ) : (
        <LoginForm 
          fields={{ email, password}}
          onSubmit={handleSubmit}
          onChange={handleChange} 
        />
      )} 
    </>
  );
}