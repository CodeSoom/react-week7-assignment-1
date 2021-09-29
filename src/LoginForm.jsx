export default function LoginForm({
  fields,
  onChange,
  onSubmit,
}) {
  const { email, password } = fields;

  const handleChange = (event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  };

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="login-email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="login-password"
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
    </>
  );
}
