export default function LoginForm({ fields, onSubmit, onChange }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          id="login-email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="login-password">
          Password
        </label>
        <input
          id="login-password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        Log In
      </button>
    </form>
  );
}
