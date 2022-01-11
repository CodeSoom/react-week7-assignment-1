// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  // ToDo 클릭하면 기존상태에서 가져온 이메일과 비번을 주고, 토큰을 받을 것이다.
  function handleClick() {
    dispatch(requestLogin());
  }

  // ToDo onChange 로 아이디, 비번 값 받아서 저장하기
  return (
    <div>
      <label htmlFor="email-input">
        E-mail
      </label>
      <input
        id="email-input"
        type="email"
      />
      <label htmlFor="password-input">
        Password
      </label>
      <input
        id="password-input"
        type="password"
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}
