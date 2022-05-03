import InputField from './InputField';

export default function LoginForm({
  onChange, onSubmit, fields = {}, isLogin,
}) {
  const { email, password } = fields;

  if (isLogin) {
    return (
      <button type="button">
        log out
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
        log in
      </button>
    </>
  );
}
