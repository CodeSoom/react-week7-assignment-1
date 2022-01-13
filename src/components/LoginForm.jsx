import TextField from './TextField';

export default function LoginForm({
  onChange,
  onSubmit,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <div>
      <TextField
        id="login-email"
        label="E-mail"
        type="email"
        name="email"
        onChange={handleChange}
      />
      <TextField
        id="login-password"
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
      />
      <button type="button" onClick={onSubmit}>Log in</button>
    </div>
  );
}
