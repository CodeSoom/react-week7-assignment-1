import React from 'react';

import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestLogin());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input id="password" type="password" />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
