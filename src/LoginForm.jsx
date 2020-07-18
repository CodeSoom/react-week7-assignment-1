import React from 'react';

import InputControl from './InputControl';

export default function LoginForm({
  email, password, onSubmit, onChange,
}) {
  return (
    <form onSubmit={onSubmit}>
      <InputControl
        label="E-mail"
        name="email"
        type="email"
        value={email}
        onChange={onChange}
      />
      <InputControl
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
