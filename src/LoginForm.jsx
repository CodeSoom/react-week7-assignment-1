export default function LoginForm({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input
          id="login-email"
          type="email"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </div>

      <button type="button" name="login">
        log in
      </button>
    </>
  );
}
