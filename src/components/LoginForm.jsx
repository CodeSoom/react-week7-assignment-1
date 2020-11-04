import React from 'react';

import LoginInput from './LoginInput';

export default function LoginForm({
  id, password, onChangeId, onChangePassword, onClick,
}) {
  const loginAble = id && password;

  return (
    <form>
      <LoginInput
        type="text"
        placeholder="ID"
        value={id}
        onChange={onChangeId}
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
