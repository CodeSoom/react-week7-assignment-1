import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <label htmlFor="email-input">
        E-mail
      </label>
      <input
      type="text"
      id="email-input"
      />
    </div>
  );
}
