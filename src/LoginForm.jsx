export default function LoginForm({ onChange, onSubmit, email, password }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
