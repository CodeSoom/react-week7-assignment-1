export default function LogoutForm({ onClick }) {
  return (
    <>
      <h2>Log Out</h2>
      <button
        type="button"
        onClick={onClick}
      >
        Log out
      </button>
    </>
  );
}
