import React from 'react';

import Input from './Input';

export default function LoginForm({
  email, password, onChange, onClick,
}) {
  return (
    <form>

      <Input
        id="login-email"
        name="email"
        type="email"
        value={email}
        onChange={onChange}
      >
        E-mail
      </Input>

      <Input
        id="login-password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
      >
        Password
      </Input>

      <button type="button" onClick={onClick}>Log In</button>
    </form>
  );
}
