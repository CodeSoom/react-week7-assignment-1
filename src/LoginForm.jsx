import TextField from './TextField';

export default function LoginForm({ handleChange, handleSubmit, form }) {
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
        Log In
      </button>
    </>
  );
}
