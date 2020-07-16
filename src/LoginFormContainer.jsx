import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginFields,
  createToken,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { loginFields } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClick() {
    dispatch(createToken());
  }

  return (
    (accessToken === '')
      ? (
        <LoginForm
          loginFields={loginFields}
          onChange={handleChange}
          onClick={handleClick}
        />
      )
      : <button type="button">Log out</button>
  );
}
