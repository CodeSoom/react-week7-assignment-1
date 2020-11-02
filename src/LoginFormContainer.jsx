import React from 'react';

export default function LoginFormContainer() {
  return (
    <div>
      <h2>Log In</h2>
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
    </div>
  );
}
