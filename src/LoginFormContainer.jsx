import React from 'react';

import { useDispatch } from 'react-redux';

import {
  changeLoginFields,
} from './actions';

export default function LoginPage() {
  const dispatch = useDispatch();

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
        <input type="text" id="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input type="text" id="password" onChange={handleChange} />
      </div>
      <button
        type="button"
      >
        Log In
      </button>
    </>
  );
}
