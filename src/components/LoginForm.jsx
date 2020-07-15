import React from 'react';

export default function LoginForm({ onChange, onSubmit }) {
  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <div>
        <label>
          E-Mail
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" name="password" />
        </label>
      </div>
      <input type="submit" value="로그인" />
    </form>
  );
}
