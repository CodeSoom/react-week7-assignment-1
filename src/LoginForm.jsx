import TextField from './TextField';

export default function LoginForm({
  onSubmit, email, onChange, password,
}) {
  return (
    <form onSubmit={onSubmit}>
      <TextField value={email} name="email" label="E-mail" onChange={onChange} />
      <TextField value={password} name="password" label="Password" onChange={onChange} type="password" />
      <>
        <button type="submit">Log in</button>
      </>
    </form>
  );
}
