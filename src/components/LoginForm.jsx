import React from 'react';

export default function LoginForm({
  email, password, onChangeEmail, onChangePassword, onClick,
}) {
  const isValid = email && password;

  return (
    <form>
      <input
        type="text"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => onChangeEmail(e.target.value)}
        aria-invalid={!email}
      />
      <input
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => onChangePassword(e.target.value)}
        aria-invalid={!password}
      />
      <button
        type="button"
        disabled={!isValid}
        onClick={onClick}
      >
        Log in
      </button>
    </form>
  );
}
