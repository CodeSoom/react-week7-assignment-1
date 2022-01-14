import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  function handleSubmit() {
    // TODO: email/password 제출하면 토큰 가져오기
  }

  function handleChange() {
    // TODO: dispatch email & password
  }
  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
