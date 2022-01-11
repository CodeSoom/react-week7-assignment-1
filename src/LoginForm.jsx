import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  function handleClick() {
    // 로그인은 비동기로 요청처리
    // requestLogin 하는데, 안에 있는 상태를 활용하게 하면 됨 
    // 그 상태는 리덕스에서 처리
    dispatch(requestLogin());
  }
  return (
    <>
      <label htmlFor="login-email">
        E-mail
      </label>
      <input type="email" id="login-email" />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="password" id="login-password" />
      <button type="button" onClick={handleClick}>
        Login
      </button>
    </>
  );
}
