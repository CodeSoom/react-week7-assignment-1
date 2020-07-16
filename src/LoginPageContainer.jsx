import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './LoginPage';

import { 
  changeLoginFields,
  requestLogin,
} from './actions';

export default function LoginPageContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  function handleChangeLoginFields({ name, value }) {
    console.log({ name, value });
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClickLoginButton() {
    dispatch(requestLogin());
  }

  return (
    <LoginPage 
      fields={{ email, password }}
      onChange={handleChangeLoginFields}
      onClick={handleClickLoginButton}
    />
  )
}