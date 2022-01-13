export default function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <div>
        <label htmlFor="email">이메일</label>
        <input name="email" type="text" />

      </div>
      <div>
        <label htmlFor="password">패스워드</label>
        <input name="password" type="password" />
      </div>
    </div>
  );
}
