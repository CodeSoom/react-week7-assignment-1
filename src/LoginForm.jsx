import React from 'react';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email_field">E-mail</label>
        <input
          id="email_field"
          name="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <label htmlFor="password_field">Password</label>
        <input
          id="password_field"
          name="password"
          type="password"
          value={password}
          placeholder="passord"
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
