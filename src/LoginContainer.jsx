import React from 'react';

import { useSelector } from 'react-redux';

import InputField from './InputField';

export default function LoginContainer() {
  const {
    email,
    password,
  } = useSelector((state) => state.loginFields);

  const handleChange = () => { };

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
      <button type="button">Log In</button>
    </>
  );
}
