import React from 'react';

import LoginInput from './LoginInput';

export default function LoginForm({
  email, password, onChangeEmail, onChangePassword, onClick,
}) {
  const loginAble = email && password;

  return (
    <form>
      <LoginInput
        type="text"
        placeholder="EMAIL"
        value={email}
        onChange={onChangeEmail}
      />
      <LoginInput
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={onChangePassword}
      />
      <button
        type="button"
        disabled={!loginAble}
        onClick={onClick}
      >
        Log in
      </button>
    </form>
  );
}
