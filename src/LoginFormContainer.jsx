import React from 'react';

import { useDispatch } from 'react-redux';

function requestLogin() {
//
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(requestLogin({ email, password }));
  }

  return (
    <div>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input type="text" id="input-email" name="email" />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input type="password" id="input-password" name="password" />
      </div>
      <button type="button" onClick={handleSubmit}>Log In</button>
    </div>
  );
}
