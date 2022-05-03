export default function LoginForm({ onChange, onSubmit }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  function handleClick(event) {
    const { name, value } = event.target;
    onSubmit({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          id="login-email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          id="login-password"
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        Log In
      </button>
    </>
  );
}
