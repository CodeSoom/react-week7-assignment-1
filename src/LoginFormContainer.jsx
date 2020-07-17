import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  changeLoginFields,
  requestLogin,
  setAccessToken,
} from './actions';

import { get } from './utils';

function Logout({ onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick('Log-out')}
    >
      Log out
    </button>
  );
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(changeLoginFields({ name, value }));
  }

  function handleClick(command) {
    if (command === 'Log-out') {
      dispatch(setAccessToken(null));
      return;
    }
    dispatch(requestLogin());
  }

  return (
    <>
      <h2>Log in</h2>
      {accessToken
        ? (
          <Logout
            onClick={handleClick}
          />
        )
        : (
          <LoginForm
            onChange={handleChange}
            onClick={handleClick}
            loginFields={loginFields}
          />
        )}
    </>
  );
}
