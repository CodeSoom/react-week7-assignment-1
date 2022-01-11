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
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="password" id="login-password" />
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
