export default function LoginForm({ onSubmit, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <>
      <h2>Log In</h2>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email-input"
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
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        login
      </button>
    </>
  );
}
