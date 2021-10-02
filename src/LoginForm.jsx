import LoginInput from './LoginInput';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  return (
    <>
      <LoginInput
        label="e-mail"
        type="email"
        inputValue={email}
        onChange={onChange}
      />
      <LoginInput
        label="password"
        type="password"
        inputValue={password}
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}>
        Log in
      </button>
    </>
  );
}
