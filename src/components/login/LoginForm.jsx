export default function LoginForm({ email, password }) {
  return (
    <form>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input type="text" id="email" value={email} />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input type="password" id="password" value={password} />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
}
