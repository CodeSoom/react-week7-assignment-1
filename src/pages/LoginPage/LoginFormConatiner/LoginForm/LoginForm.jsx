export default function LoginForm({ loginFields, onChange, onSubmit }) {
  const { email, password } = loginFields;

  const handleChange = (event) => {
    const { target: { name, value } } = event;

    onChange({ name, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
