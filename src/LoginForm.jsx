import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <h2>Log In</h2>

      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          id="Email"
          value={''}
          onChange={null}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          id="Password"
          value={''}
          onChange={null}
        />
      </div>
    </div>
  );
}
