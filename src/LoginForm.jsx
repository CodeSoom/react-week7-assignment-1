export default function LoginForm({ onSubmit, onChange }) {
  const handleChange = (e) => {
    const { target: { name, value } } = e;
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
        />
      </div>
      <button type="button" onClick={onSubmit}>Log In</button>
    </>
  );
}
