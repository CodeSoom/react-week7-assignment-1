import React from 'react';

import TextField from './TextField';

export default function LoginForm({ onChange, onSubmit }) {
  return (
    <>
      <TextField
        label="E-mail"
        name="email"
        type="email"
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        onChange={onChange}
      />
      <div>
        <button
          type="button"
          onClick={onSubmit}
        >
          Log In
        </button>
      </div>
    </>
  );
}
