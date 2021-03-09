import React from 'react';

export default function LogInPage() {
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <fieldset>
          <legend>식당 로그인:</legend>
          <label htmlFor="user-email">
            E-Mail
          </label>
          <input
            type="email"
            id="user-email"
          />
          <label htmlFor="user-password">
            Password
          </label>
          <input
            type="password"
            id="user-password"
          />
          <button type="submit">
            Log In
          </button>
        </fieldset>
      </form>
    </div>
  );
}
