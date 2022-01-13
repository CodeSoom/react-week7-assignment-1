import React from 'react';

export default function LoginForm({ onChange }) {
  return (
    <div>
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" name="email" type="text" onChange={onChange} />
      </div>

      <div>
        <label htmlFor="password">패스워드</label>
        <input id="password" name="password" type="password" onChange={onChange} />
      </div>
    </div>
  );
}
