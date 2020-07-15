import React from 'react';

export default function LoginFormContainer() {
  return (
    <form>
      <label htmlFor="email">
        E-mail
      </label>
      <input id="email" type="email" />
      <label htmlFor="password">
        Password
      </label>
      <input id="password" type="password" />
    </form>
  );
}
