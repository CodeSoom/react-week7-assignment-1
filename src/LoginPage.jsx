export default function LoginPage() {
  function handleClick() {
    // Todo: dispatch(requestLogin());
  }

  return (
    <>
      <div>Log In</div>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="email" id="login-email" />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input type="password" id="login-password" />
      </div>
      <button type="button" onClick={handleClick}>Log In</button>
    </>
  );
}
