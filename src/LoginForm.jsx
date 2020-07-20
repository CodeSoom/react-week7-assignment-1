import React from 'react';

import TextField from './TextField';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  return (
    <>
      <TextField
        id="login-email"
        label="E-mail"
        type="email"
        name="email"
        inputValue={email}
        onChange={onChange}
      />
      <TextField
        id="login-password"
        label="Password"
        type="password"
        name="password"
        inputValue={password}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
