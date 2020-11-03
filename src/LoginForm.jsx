import React from 'react';

export default function LoginForm({ fields, onClick, onChange }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { name, value } = event.target;

    onChange({ name, value });
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
        type="button"
        onClick={onClick}
      >
        로그인
      </button>
    </div>
  );
}
