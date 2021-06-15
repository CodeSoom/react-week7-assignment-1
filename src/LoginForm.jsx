import TextField from './TextField';

export default function LoginForm({
  handleChange, handleSubmit, form, isLoggedIn,
}) {
  const fields = ['email', 'password'];

  return (
    <>
      <TextField
        fields={fields}
        form={form}
        handleChange={handleChange}
      />

      <button
        type="button"
        onClick={handleSubmit}
      >
        {isLoggedIn ? 'Log out' : 'Log In'}
      </button>
    </>
  );
}
