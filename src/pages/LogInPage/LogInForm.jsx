import React from 'react';

export default function LogInForm({
  handleSubmit,
  onSubmit,
  register,
  token,
  handleLogout,
}) {
  if (token) {
    return (
      <button
        type="button"
        onClick={handleLogout}
      >
        Log Out
      </button>
    );
  }

  return (
    <div>
      <h1>Log In</h1>
      {!token && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>식당 로그인:</legend>
            <label htmlFor="email">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={register({ required: true })}
            />
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={register({ required: true })}
            />
            <button type="submit">
              Log In
            </button>
            <br />
          </fieldset>
        </form>
      )}

    </div>
  );
}
