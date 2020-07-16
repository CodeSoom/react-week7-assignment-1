import React from 'react';

import InputField from './InputField';

export default function LoginForm({ loginFields, onChange, onClick }) {
  const { email, password } = loginFields;

  return (
    <>
      <div>
        <InputField
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        Log In
      </button>
    </>
  );
}
