import React from 'react';

import TextField from './TextField';

export default function LoginForm({ fields, onSubmit, onChange }) {
  const { email, password } = fields;

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <div>
      <TextField
        label="E-mail"
        name="email"
        textValue={email}
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        textValue={password}
        onChange={onChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Log In
      </button>
    </div>
  );
}
