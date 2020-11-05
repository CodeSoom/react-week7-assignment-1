import React from 'react';

import Input from './Input';

export default function LoginForm({
  email, password, onChange, onSubmit,
}) {
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

      <button type="submit" onSubmit={handleClickLoginButton}>Log In</button>
    </form>
  );
}
