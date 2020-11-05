import React from 'react';

import InputField from './InputField';

export default function LoginPage({
  onChange,
}) {
  return (
    <>
      <div>
        <InputField
          id="login-email"
          label="E-mail"
          type="email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div>
        <InputField
          id="login-password"
          label="Password"
          type="password"
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="button">Log In</button>
    </>
  );
}
