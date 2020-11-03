import React from 'react';

import LoginInput from './LoginInput';

export default function Login({
  id, password, onChange, onClick,
}) {
  const loginAble = id && password;

  return (
    <form>
      <LoginInput
        type="text"
        placeholder="ID"
        value={id}
        onChange={onChange}
      />
      <LoginInput
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={onChange}
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
