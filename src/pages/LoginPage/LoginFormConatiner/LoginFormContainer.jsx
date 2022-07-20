export default function LoginFormContainer() {
  return (
    <form>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
