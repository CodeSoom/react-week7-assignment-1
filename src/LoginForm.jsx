export default function LoginForm({ fields, onChange }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <label htmlFor="login-email">e-mail</label>
      <input
        type="email"
        id="login-email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="login-password">password</label>
      <input
        type="password"
        id="login-password"
        name="password"
        value={password}
        onChange={handleChange}
      />
    </>
  );
}
