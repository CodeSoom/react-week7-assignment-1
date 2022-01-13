export default function LoginForm({ onClick }) {
  return (
    <>
      <input
        type="text"
        value="test@test.com"
      />
      <input
        type="text"
        value="123456"
      />
      <button
        type="button"
        onClick={onClick}
      >
        Log In
      </button>
    </>
  );
}
