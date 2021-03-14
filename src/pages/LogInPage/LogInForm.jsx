import React from 'react';

export default function LogInForm({
  token,
  handleSubmit,
  onSubmit,
  register,
  errors,
  handleLogout,
}) {
  if (token) {
    return (
      <button
        type="button"
        onClick={handleLogout}
      >
        Log out
      </button>
    );
  }

  return (
    <div>
      <h1>Log In</h1>
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

          {errors.email && <p>이메일을 입력해주세요</p>}
          {errors.password && <p>비밀번호를 입력해주세요</p>}

        </fieldset>
      </form>
    </div>
  );
}
