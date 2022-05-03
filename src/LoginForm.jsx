export default function LoginForm({ onSubmit }) {
  function handleClick(event) {
    const { name, value } = event.target;
    onSubmit({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">email</label>
        <input
          type="email"
          placeholder="email"
          id="login-email"
        />
      </div>
      <div>
        <label htmlFor="login-password">password</label>
        <input
          type="password"
          placeholder="password"
          id="login-password"
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        Log In
      </button>
    </>
  );
}
