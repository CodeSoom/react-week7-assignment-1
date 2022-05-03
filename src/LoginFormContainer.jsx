export default function LoginFormContainer() {
  return (
    <>
      <div>
        <label htmlFor="login-email">email</label>
        <input
          type="email"
          placeholder="email"
          id="login-email"
        />
      </div>
      <div>
        <label htmlFor="login-password">password</label>
        <input
          type="password"
          placeholder="password"
          id="login-password"
        />
      </div>
    </>
  );
}
