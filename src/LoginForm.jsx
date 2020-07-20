import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <form>
        <label htmlFor="email_field">E-mail</label>
        <input id="email_field" type="email" placeholder="email" />
        <label htmlFor="password_field">Password</label>
        <input id="password_field" type="password" placeholder="passord" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
