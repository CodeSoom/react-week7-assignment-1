import React from 'react';

import InputField from './InputField';

export default function LoginForm({
  email,
  password,
  onChange,
  onSubmit,
}) {
  const handleChange = (event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  };

  return (
    <>
      <div>
        <InputField
          id="login-email"
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <InputField
          id="login-password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
