import React from 'react';

import InputField from './InputField';

export default function LoginPage({
  email,
  password,
  onChange,
}) {
  return (
    <>
      <h2>Log In</h2>
      <div>
        <InputField
          id="login-email"
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <InputField
          id="login-password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="button">Log In</button>
    </>
  );
}
