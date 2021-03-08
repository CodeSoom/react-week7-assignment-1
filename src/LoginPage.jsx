import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log in</h2>
      <div>
        <label htmlFor="loginEmail">
          E-mail
        </label>
        <input type="email" id="loginEmail" />
      </div>
      <div>
        <label htmlFor="loginPassword">
          Password
        </label>
        <input type="password" id="loginPassword" />
      </div>
      <button type="button">
        Log In
      </button>
    </div>
  );
}
