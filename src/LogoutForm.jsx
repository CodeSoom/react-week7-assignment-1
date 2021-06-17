export default function LogoutForm({ onClick }) {
  return (
    <>
      <div>
        <h3>로그인 성공!</h3>
        <p>반갑습니다:)</p>
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        Log out
      </button>
    </>
  );
}
