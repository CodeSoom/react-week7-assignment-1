import React from 'react';

export default function LoginFormContainer() {
  function handleClick() {
    // dispatch
  }

  return (
    <div>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        Log in
      </button>
    </div>
  );
}
