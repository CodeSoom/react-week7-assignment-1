export default function LoginPage() {
  return (
    <>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-emali" />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="email" id="login-password" />
      </div>
      <button type="button">Log in</button>

    </>
  );
}
