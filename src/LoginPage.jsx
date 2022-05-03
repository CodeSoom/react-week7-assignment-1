export default function LoginPage() {
  return (
    <>
      <h2>Log In</h2>
      <label htmlFor="email-input">
        E-mail
      </label>
      <input
        type="email"
        name="email"
        id="email-input"
      />
      <label htmlFor="password-input">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password-input"
      />
    </>
  );
}
