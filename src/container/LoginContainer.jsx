import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from 'presentational/Input';

import {
  changeLoginField,
} from 'state/actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const { loginField: { email, password } } = useSelector((state) => ({
    loginField: state.loginField,
  }));

  function handleChangeLoginFields({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <form>

      <Input
        id="login-email"
        name="email"
        type="email"
        value={email}
        onChange={handleChangeLoginFields}
      >
        E-mail
      </Input>

      <Input
        id="login-password"
        name="password"
        type="password"
        value={password}
        onChange={handleChangeLoginFields}
      >
        Password
      </Input>

      <button type="submit">Log In</button>
    </form>
  );
}
