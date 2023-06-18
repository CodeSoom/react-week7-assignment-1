export default function LoginForm({ onChange, onSubmit, email, password }) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="login-email">E-mail</label>
          <input
            id="login-email"
            type="email"
            name="email"
            value={email}
            placeholder="tester@example.com"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            name="password"
            placeholder="test"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="button" onClick={onSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}
