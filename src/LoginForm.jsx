export default function LoginForm({ fields, onSubmit, onChange }) {
  const { email, password } = fields;

  function handleChange(e) {
    const { target: { name, value } } = e;

    onChange({ name, value });
  }

  return (
    <form>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          type="text"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </form>
  );
}
