import TextField from './TextField';

export default function LoginForm({ fields, onSubmit, onChange }) {
  const { email, password } = fields;

  return (
    <>
      <h2>LogIn</h2>
      <TextField
        label="E-mail"
        type="email"
        name="email"
        value={email || ''}
        onChange={onChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password || ''}
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
