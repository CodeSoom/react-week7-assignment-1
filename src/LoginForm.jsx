import React from 'react';

import TextField from './TextField';

export default function LoginForm({
  email, password, onSubmit, onChange,
}) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="E-mail"
        name="email"
        type="email"
        value={email}
        onChange={onChange}
      />
      <TextField
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
