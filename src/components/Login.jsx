import React from 'react';

import LoginInput from './LoginInput';

export default function Login({ id, password, onChange }) {
  return (
    <form>
      <LoginInput placeholder="ID" value={id} onChange={onChange} />
      <LoginInput placeholder="PASSWORD" value={password} onChange={onChange} />
    </form>
  );
}
