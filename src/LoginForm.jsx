// 관심사: 로그인 폼을 화면에 나타내기
export default function LoginForm({ field, onChangeField, onClick }) {
  const { email, password } = field;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChangeField({ name, value });
  }

  return (
    <div>
      <div>
        <label htmlFor="email-input">
          E-mail
        </label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          id="email-input"
          type="email"
        />
      </div>
      <div>
        <label htmlFor="password-input">
          Password
        </label>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          id="password-input"
          type="password"
        />
      </div>
      <div>
        <button
          type="button"
          onClick={onClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
