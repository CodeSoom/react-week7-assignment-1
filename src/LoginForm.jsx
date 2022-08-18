export default function LoginForm({
  email,
  password,
  accessToken,
  onChange,
  onClick,
}) {
  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="button" onClick={onClick}>Log In</button>
      <p>{accessToken}</p>
    </>
  );
}
