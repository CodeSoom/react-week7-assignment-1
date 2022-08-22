import TextInput from './TextInput';

export default function LoginForm({
  email,
  password,
  accessToken,
  onChange,
  onClick,
}) {
  return (
    <>
      <TextInput
        id="login-email"
        label="E-mail"
        type="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <TextInput
        id="login-password"
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>Log In</button>
      <p>{accessToken}</p>
    </>
  );
}
