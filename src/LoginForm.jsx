import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginForm() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }

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
      <button type="button" onClick={handleClick}>
        Login
      </button>
    </>
  );
}
