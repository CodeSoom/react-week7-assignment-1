import React from 'react';

import InputField from './InputField';

export default function LoginForm({ fields, onChange, onClick }) {
  const { email, password } = fields;

  return (
    <>
      <InputField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        Log In
      </button>
    </>
  );
}
