export default function LoginForm({ onSubmit, onChange }) {
  const handleChange = (e) => {
    const { target: { name, value } } = e;
    return onChange({ name, value });
  };

  return (
    <>
      <div>
        <label htmlFor="loginEmail">E-mail</label>
        <input
          type="email"
          id="loginEmail"
          placeholder="이메일을 입력해주세요"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="loginPassword">Password</label>
        <input type="password" id="loginPassword" placeholder="패스워드를 입력해주세요" />
      </div>
      <button type="button" onClick={onSubmit}>
        Login
      </button>
    </>
  );
}
