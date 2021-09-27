export default function LoginForm({ fields, onChange, onSubmit }) {
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
          id="login-email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          onChange={handleChange}
          value={password}
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
