// 관심사: 로그아웃 폼을 화면에 나타내기
export default function LogoutForm({ onClickLogout }) {
  return (
    <button
      type="button"
      onClick={onClickLogout}
    >
      Log Out
    </button>
  );
}
