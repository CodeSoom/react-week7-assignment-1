import TextField from '../components/TextField';

export default function LoginForm({
  fields: { email, password },
  onChange,
  onSubmit,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="E-mail"
        name="email"
        value={email}
        type="email"
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        type="password"
        onChange={onChange}
      />
      <button type="submit">
        Log In
      </button>
    </form>
  );
}
