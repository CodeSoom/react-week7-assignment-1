export default function LoginForm({ handleChange, handleSubmit, form }) {
  return (
    <>
      <label htmlFor="input-email">
        email
      </label>
      <input
        type="text"
        id="input-email"
        name="email"
        value={form.email}
        onChange={(e) => handleChange(e.target)}
      />

      <label htmlFor="input-password">
        password
      </label>
      <input
        type="text"
        id="input-password"
        name="password"
        value={form.password}
        onChange={(e) => handleChange(e.target)}
      />

      <button
        type="button"
        onClick={handleSubmit}
      >
        Log In
      </button>
    </>
  );
}
