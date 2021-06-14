export default function LoginForm({ handleChange }) {
  return (
    <>
      <label htmlFor="input-email">
        email
      </label>
      <input
        type="text"
        id="input-email"
        name="email"
        onChange={handleChange}
      />

      <label htmlFor="input-password">
        password
      </label>
      <input
        type="text"
        id="input-password"
        name="password"
        onChange={handleChange}
      />

      <button type="button">
        Log In
      </button>
    </>
  );
}
