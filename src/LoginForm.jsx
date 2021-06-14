export default function LoginForm() {
  return (
    <>
      <label htmlFor="input-email">
        Email
      </label>
      <input type="text" id="input-email" />

      <label htmlFor="input-password">
        Password
      </label>
      <input type="text" id="input-password" />

      <button type="button">
        Log In
      </button>
    </>
  );
}
