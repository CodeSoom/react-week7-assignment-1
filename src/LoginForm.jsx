import React from 'react';

export default function LoginForm({ fields, onChange, onClick }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="id-input-text">ID</label>
        <input
          type="text"
          id="id-input-text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pw-input-text">PW</label>
        <input
          type="text"
          id="pw-input-text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={onClick}
        >
          로그인
        </button>
      </div>
    </>
  );
}
