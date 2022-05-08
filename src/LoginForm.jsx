import InputField from './InputField';

export default function LoginForm({
  onChange, onSubmit, fields = {}, isLogin, onLogout,
}) {
  const { email, password } = fields;

  if (isLogin) {
    return (
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    );
  }

  return (
    <>
      <InputField
        label="E-mail"
        type="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button
        type="button"
        name="login"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
