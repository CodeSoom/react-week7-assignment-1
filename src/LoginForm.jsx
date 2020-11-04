import React from 'react';

export default function LoginForm({ onSubmit }) {
  function handleClick() {
    onSubmit();
  }

  return (
    <div>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input type="text" id="input-email" name="email" />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input type="password" id="input-password" name="password" />
      </div>
      <button type="button" onClick={handleClick}>Log In</button>
    </div>
  );
}
