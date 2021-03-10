import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <div>
          <label htmlFor="input-email">E-mail</label>
          <input
            type="email"
            name="email"
            id="input-email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="input-password">Password</label>
          <input
            type="password"
            name="password"
            id="input-password"
            placeholder="password"
          />
        </div>
      </form>
    </div>
  );
}
