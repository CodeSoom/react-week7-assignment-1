import React from 'react';

export default function LoginForm({
  email, password, onSubmit, onChange,
}) {
  const handleChange = (e) => {
    const { target: { name, value } } = e;
    onChange({ name, value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
