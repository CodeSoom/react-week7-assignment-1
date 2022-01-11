export default function LoginForm({ onChange, onSubmit }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input
        type="email"
        id="login-email"
        onChange={handleChange}
        name="email"
      />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="password" id="login-password" />
      <button type="button" onClick={onSubmit}>
        Login
      </button>
    </>
  );
}
