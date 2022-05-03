import InputField from './InputField';

export default function LoginForm({
  onChange, onSubmit, fields = {},
}) {
  const { email, password } = fields;

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
