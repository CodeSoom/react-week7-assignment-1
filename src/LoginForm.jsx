import TextFields from './TextFields';

export default function LoginForm({
  handleChange, handleLogin, handleLogout, form, isLoggedIn,
}) {
  const fields = ['email', 'password'];

  return (
    <>
      {(isLoggedIn)
        ? (
          <button
            type="button"
            onClick={handleLogout}
          >
            Log out
          </button>
        )
        : (
          <>
            <TextFields
              fields={fields}
              form={form}
              handleChange={handleChange}
            />
            <button
              type="button"
              onClick={handleLogin}
            >
              Log In
            </button>
          </>
        )}
    </>
  );
}
