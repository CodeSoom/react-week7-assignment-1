import React from 'react';

import { changeLoginFields, postLoginFields } from 'src/actions';

import { useDispatch } from 'react-redux';

export default function LoginForm({ loginFields }) {
  const dispatch = useDispatch();
  const { email, password } = loginFields;

  function handleChange({ target: { name, value } }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postLoginFields());
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password">
        password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
