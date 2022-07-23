export default function LoginForm({ fields: { email, password }, onChange, onSubmit }) {
  const LoginInput = ({ title, name, value }) => (
    <div>
      <label htmlFor={`login-${name}`}>{title}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={name}
        id={`login-${name}`}
      />
    </div>
  );

  return (
    <>
      <LoginInput title="E-mail" name="email" value={email} />
      <LoginInput title="Password" name="password" value={password} />

      <button onClick={onSubmit} type="button">
        Log In
      </button>
    </>
  );
}
