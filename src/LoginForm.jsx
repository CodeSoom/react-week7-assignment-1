export default function LoginForm({ onSubmit, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <div>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input id="login-email" type="text" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" name="password" onChange={handleChange} />
      </div>
      <div>
        <button type="button" onClick={onSubmit}>Log In</button>
      </div>
    </div>
  );
}
