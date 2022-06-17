import React from 'react';
import Button from '../shared/Button';
import TextBox from '../shared/TextBox';

export default function LoginForm({
  email, password, onChange, onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <TextBox
        id="email"
        labelText="Email"
        type="email"
        value={email}
        name="email"
        onChange={onChange}
      />
      <TextBox
        id="password"
        labelText="Password"
        type="password"
        value={password}
        name="password"
        onChange={onChange}
      />
      <Button onClick={onSubmit}>Login</Button>
    </form>
  );
}
