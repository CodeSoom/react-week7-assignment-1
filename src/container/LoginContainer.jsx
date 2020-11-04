import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  changeLoginField,
} from 'redux/actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  function handleChangeLoginFields(event) {
    const { name, value } = event;
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <form>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          type="email"
          name="email"
          id="login-email"
          onChange={handleChangeLoginFields}
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          name="password"
          id="login-password"
          onChange={handleChangeLoginFields}
        />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
}
