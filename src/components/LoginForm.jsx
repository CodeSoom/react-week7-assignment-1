import React from 'react';

export default function LoginForm({ onChange, onSubmit }) {
  return (
    <div>
      <div>
        <label>
          E-Mail
          <input type="email" name="email"  onChange={onChange} />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" name="password"  onChange={onChange} />
        </label>
      </div>
      <button type="submit" onClick={onSubmit}>로그인</button>
    </div>
  );
}
