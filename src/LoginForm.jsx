import React from 'react';

export default function LoginForm({
  accessToken, email, password, error,
  onChange, onSubmit, onClick,
}) {
  function handleChange(event) {
    const { target: { value, name } } = event;

    onChange({ value, name });
  }

  return (
    <>
      {accessToken ? (
        <div>
          <button
            type="button"
            onClick={onClick}
          >
            Log Out

          </button>
        </div>
      ) : (
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
          {error && <p>아이디 또는 비밀번호를 확인해주세요</p>}
          <button type="submit">Log In</button>
        </form>
      )}
    </>
  );
}
