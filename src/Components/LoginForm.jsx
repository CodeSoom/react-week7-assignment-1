export default function LoginFormContainer() {
  function handleClick() {
  }

  return ((
    <>
      <label htmlFor="login-email">
        Username
      </label>
      <input type="email" id="login-email" />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="password" id="login-password" />
      <button
        type="button"
        onClick={handleClick}
      >
        Log In
      </button>
    </>
  ));
}
