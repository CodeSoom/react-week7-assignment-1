export default function LoginForm({ email, password, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <form>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
}
