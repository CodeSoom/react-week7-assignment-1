import React from 'react';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  return (
    <div>
      <h2>Log In</h2>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            id="Email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="Password"
            value={password}
            onChange={onChange}
          />
        </div>

        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
