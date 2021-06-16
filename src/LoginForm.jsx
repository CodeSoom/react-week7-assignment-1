import TextField from './TextField';

export default function LoginForm({
  handleChange, handleSubmit, form, isLoggedIn,
}) {
  const fields = ['email', 'password'];
  const buttonName = isLoggedIn ? 'Log out' : 'Log In';

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
        {buttonName}
      </button>
    </>
  );
}
