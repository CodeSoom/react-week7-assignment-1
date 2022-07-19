import React from 'react';
import { useDispatch } from 'react-redux';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch();
  };

  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input type="email" id="login-email" />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input type="password" id="login-password" />
      </div>

      <button onClick={handleClickLogin} type="button">
        Log In
      </button>
    </>
  );
}
