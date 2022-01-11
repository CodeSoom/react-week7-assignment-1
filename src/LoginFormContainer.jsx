import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    // 로그인은 비동기로 요청처리
    // requestLogin 하는데, 안에 있는 상태를 활용하게 하면 됨
    // 그 상태는 리덕스에서 처리
    dispatch(requestLogin());
  }

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
}
