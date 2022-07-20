export default function LoginFormContainer({ onChange, onSubmit }) {
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
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
