import React from 'react';

import LoginInput from './LoginInput';

export default function Login({ id, password, onChange }) {
  const loginAble = id && password;

  return (
    <form>
      <LoginInput placeholder="ID" value={id} onChange={onChange} />
      <LoginInput placeholder="PASSWORD" value={password} onChange={onChange} />
      <button
        type="button"
        disabled={!loginAble}
      >
        Log in
      </button>
    </form>
  );
}
