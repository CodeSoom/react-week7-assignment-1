// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  // ToDo 클릭하면 기존상태에서 가져온 이메일과 비번을 주고, 토큰을 받을 것이다.
  function handleClick() {
    dispatch(requestLogin());
  }

  // ToDo onChange 로 이메일, 비번 값 받아서 저장하기
  function handleChange() {
    //
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
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
