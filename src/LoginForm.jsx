import React from 'react';

export default function LoginForm({ fields, onSubmit, onChange }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { name, value } = event.target;

    onChange({ name, value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <div>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password-input">
          Password
        </label>
        <input
          type="password"
          id="password-input"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Log In
      </button>
    </div>
  );
}
