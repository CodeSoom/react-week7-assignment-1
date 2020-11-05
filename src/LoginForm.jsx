import React from 'react';

export default function LoginForm({
  accessToken, loginFields, onSubmit, onChange,
}) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <div>
      {
        accessToken ? (
          <button type="button">Log out</button>
        ) : (
          <>
            <div>
              <label htmlFor="input-email">E-mail</label>
              <input
                type="text"
                id="input-email"
                name="email"
                value={loginFields.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="input-password">Password</label>
              <input
                type="password"
                id="input-password"
                name="password"
                value={loginFields.password}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={onSubmit}>Log In</button>
          </>
        )
      }
    </div>
  );
}
