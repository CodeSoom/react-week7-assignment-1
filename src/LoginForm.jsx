export default function LoginForm({ onChange, onSubmit }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          id="login-email"
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          name="password"
          onChange={handleChange}
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
