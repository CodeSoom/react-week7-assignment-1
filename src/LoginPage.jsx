import React from 'react';

import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginPage() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }
  return (
    <div>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input type="email" id="login-email"></input>
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" id="login-password"></input>
      </div>
      <button type="button" onClick={handleClick}>Log-In</button>
    </div>
  );
}
