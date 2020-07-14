import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeLoginFields } from './actions';

function LoginForm({ loginFields, onChange }) {
  const { email, password } = loginFields;

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { loginFields } = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  function handleChange(event) {
    const { target: { name, value } } = event;

    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <LoginForm loginFields={loginFields} onChange={handleChange} />
  );
}
