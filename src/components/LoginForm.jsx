import TextField from './TextField';

export default function LoginForm({ onChange, onSubmit }) {
  return (
    <>
      <div>
        <TextField
          label="E-mail"
          type="email"
          name="email"
          id="login-email"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          name="password"
          id="login-password"
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}
