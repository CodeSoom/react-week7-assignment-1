export default function LoginFormContainer() {
  return (
    <form>
      <label htmlFor="email">E-mail</label>
      <input id="email" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" type="text" />
      <button type="submit">Log In</button>
    </form>
  );
}
