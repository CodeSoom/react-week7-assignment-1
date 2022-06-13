export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <>
      <h2>LoginFormContainer</h2>
      <div>
        <label htmlFor="login-email">
          E-mail
          <input
            type="email"
            name="email"
            id="login-email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="login-password">
          Password
          <input
            type="password"
            name="password"
            id="login-password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSubmit}>Log In</button>
    </>
  );
}
