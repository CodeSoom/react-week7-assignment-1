export default function LoginFormContainer() {
  return (
    <>
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
    </>
  );
}
