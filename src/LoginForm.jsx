export default function LoginForm({ fields, onSubmit, onChange }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <>
      <h2>LogIn</h2>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email-input"
          value={email || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password-input">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password-input"
          value={password || ''}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
