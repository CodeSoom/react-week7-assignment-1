import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginFields,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <>
      <p>Log in</p>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <button
        type="button"
      >
        Log In
      </button>
    </>
  );
}
