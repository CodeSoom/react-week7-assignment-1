import React from 'react';

import { useDispatch } from 'react-redux';

import { changeLoginFields } from './actions';

function LoginForm({ onChange }) {
  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange(event) {
    const { target: { name, value } } = event;

    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <LoginForm onChange={handleChange} />
  );
}
