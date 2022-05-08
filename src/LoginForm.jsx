export default function LoginForm({ loginFields, onChange, onSubmit }) {
  const { email, password } = loginFields;

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
          value={email}
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
          value={password}
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
