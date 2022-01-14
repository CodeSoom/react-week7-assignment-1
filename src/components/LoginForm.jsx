import TextField from './TextField';

export default function LoginForm({
  onChange,
  onSubmit,
}) {
  return (
    <>
      <TextField
        id="login-email"
        label="E-mail"
        type="email"
        name="email"
        onChange={onChange}
      />
      <TextField
        id="login-password"
        label="Password"
        type="password"
        name="password"
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}>Log In</button>
    </>
  );
}
