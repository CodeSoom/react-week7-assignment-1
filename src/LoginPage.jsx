import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">
          E-mail
          <input type="email" id="login-email" />
        </label>
      </div>
    </div>
  );
}
