export default function LoginPage() {
  return (
    <div>
      <h2>Log in</h2>
      <label htmlFor="login-email">e-mail</label>
      <input
        type="email"
        id="login-email"
        name="email"
      />
      <label htmlFor="login-password">password</label>
      <input
        type="password"
        id="login-password"
        name="password"
      />
    </div>
  );
}
