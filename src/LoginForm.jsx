// 관심사: 로그인 폼을 화면에 나타내기
export default function LoginForm({ onChange, onClick }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
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
