import React from 'react';

export default function LoginForm({
  email, password,
  onChange, onSubmit,
}) {
  function handleChange(event) {
    const { target: { value, name } } = event;

    onChange({ value, name });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input
          type="email"
          name="email"
          id="input-email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          name="password"
          id="input-password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
