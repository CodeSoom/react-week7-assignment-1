import React from 'react';

export default function LoginForm({
  onSubmit, onChange, fields, error,
}) {
  const { email, password } = fields;

  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" name="email" onChange={handleChange} value={email} />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" name="password" onChange={handleChange} value={password} />
      </div>
      {error && <p style={{ color: 'red' }}>로그인에 실패하였습니다.</p>}

      <button type="button" onClick={onSubmit}>Log In</button>
    </>
  );
}
