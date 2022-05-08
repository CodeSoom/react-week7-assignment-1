import TextField from './TextField';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  return (
    <>
      <TextField
        label="E-mail"
        name="email"
        inputValue={email}
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        inputValue={password}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
