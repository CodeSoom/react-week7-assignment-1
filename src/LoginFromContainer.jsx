export default function LoginFromContainer() {
  return (
    <>
      <div>
        <label htmlFor="loginEmail">E-mail</label>
        <input type="email" id="loginEmail" placeholder="이메일을 입력해주세요" />
      </div>
      <div>
        <label htmlFor="loginPassword">Password</label>
        <input type="password" id="loginPassword" placeholder="패스워드를 입력해주세요" />
      </div>
    </>
  );
}
