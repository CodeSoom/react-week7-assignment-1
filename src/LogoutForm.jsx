export default function LogoutForm({ onClick }) {
  return (
    <>
      <div>
        <p>로그인 성공!반갑습니다:)</p>
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
