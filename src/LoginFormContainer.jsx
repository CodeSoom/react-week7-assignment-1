export default function LoginFormContainer() {
  return (
    <>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input type="email" id="login-email" />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="password" id="login-password" />
    </>
  );
}
