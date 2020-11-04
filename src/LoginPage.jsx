import React from 'react';

import InputField from './InputField';

export default function LoginPage() {
  return (
    <>
      <div>
        <InputField
          id="login-email"
          label="E-mail"
          type="email"
          name="email"
        />
      </div>
      <div>
        <InputField
          id="login-password"
          label="Password"
          type="password"
          name="password"
        />
      </div>
      <button type="button">Log In</button>
    </>
  );
}
