export default function LoginFormContainer({ onClick }) {
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
        />
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        login
      </button>
    </>
  );
}
