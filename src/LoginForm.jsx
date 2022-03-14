export default function LoginForm({ loginField, onChange, onSubmit }) {
  const { email, password } = loginField;

  function inputChange({ target: { name, value } }) {
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={inputChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={inputChange}
        />
      </div>
      <button type="button" onClick={onSubmit}>
        Log In
      </button>
    </>
  );
}
