import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>

      <div>
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" />
      </div>
    </div>
  );
}
