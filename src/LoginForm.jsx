export default function LoginForm({ onChange, onSubmit }) {
  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          name="email"
          onChange={onChange}
          type="email"
          id="login-email"
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          name="password"
          onChange={onChange}
          type="password"
          id="login-password"
        />
      </div>

      <button onClick={onSubmit} type="button">
        Log In
      </button>
    </>
  );
}
