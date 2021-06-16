import TextFields from './TextFields';

export default function LoginForm({
  handleChange, handleSubmit, form, isLoggedIn,
}) {
  const fields = ['email', 'password'];
  const buttonName = isLoggedIn ? 'Log out' : 'Log In';

  return (
    <>
      <TextFields
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
