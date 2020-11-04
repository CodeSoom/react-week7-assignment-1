import React from 'react';

import InputField from './InputField';

export default function LoginPage() {
  return (
    <>
      <InputField
        id="email"
        label="E-mail"
        type="email"
        name="email"
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        name="password"
      />
      <button type="button">Log In</button>
    </>
  );
}
