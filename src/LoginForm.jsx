import React from 'react';

import TextField from './TextField';

export default function LoginForm({ fields, onChange, onSubmit }) {
  // const { email, password } = fields;

  // function handleChange(event) {
  //   const { target: { name, value } } = event;

  //   onChange({ name, value });
  // }

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
