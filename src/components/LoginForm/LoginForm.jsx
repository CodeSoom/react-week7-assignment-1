export default function LoginForm({
  id,
  pw,
  onChange,
  onSubmit,
}) {
  return (
    <div>
      <label htmlFor="id">
        아이디
      </label>
      <input
        type="text"
        onChange={({ target: { name, value } }) => onChange(name, value)}
        value={id}
        id="id"
        name="id"
      />
      <label htmlFor="pw">
        비밀번호
      </label>
      <input
        type="password"
        onChange={({ target: { name, value } }) => onChange(name, value)}
        value={pw}
        id="pw"
        name="pw"
      />
      <button type="submit" onClick={onSubmit}>
        로그인
      </button>
    </div>
  );
}
