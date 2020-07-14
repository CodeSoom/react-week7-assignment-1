import React from 'react';

export default function LoginPage() {
  return (
    <>
      <p>Log in</p>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input type="text" id="password" />
      </div>
      <button
        type="button"
      >
        Log In
      </button>
    </>
  );
}
