import React from 'react';

export default function LoginForm({ onChange }) {
  return (
    <div>
      <div>
        <label>
          E-Mail
          <input
            type="email"
            name="email"
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
}
