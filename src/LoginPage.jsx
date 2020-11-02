import React from 'react';

export default function LoginPage() {
  return (
    <form>
      <div>
        <h2>Log In</h2>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
