import React from 'react';

import { useDispatch } from 'react-redux';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch();
  }
  return (
    <div>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          type="text"
          id="email-input"
        />
      </div>
      <div>
        <label htmlFor="password-input">
          Password
        </label>
        <input
          type="text"
          id="password-input"
        />
      </div>
      <button 
      type="button"
      onClick={handleClick}>
        로그인
      </button>
    </div>
  );
}
