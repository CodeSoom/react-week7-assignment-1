export default function UserInfo({ email, onClick }) {
  return (
    <>
      <div>{email}님 안녕하세요</div>
      <button type="button" onClick={onClick}>
        로그아웃
      </button>
    </>
  );
}
