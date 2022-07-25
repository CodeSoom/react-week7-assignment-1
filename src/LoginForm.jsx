import LoginInput from './LoginInput';

export default function LoginForm({ fields: { email, password }, onChange, onSubmit }) {
  return (
    <>
      <LoginInput title="E-mail" name="email" value={email} onChange={onChange} />
      <LoginInput title="Password" name="password" value={password} onChange={onChange} />

      <button onClick={onSubmit} type="button">
        Log In
      </button>
    </>
  );
}
