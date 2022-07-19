export default function LoginFormContainer() {
  return (
    <form>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input type="password" id="password" />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
}
