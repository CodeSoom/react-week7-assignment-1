import React from 'react';

export default function LoginForm({ onSubmit, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" name="password" onChange={handleChange} />
      </div>
      <button type="button" onClick={onSubmit}>Log In</button>
    </>
  );
}
