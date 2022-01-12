// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { get } from './utils';

import {
  requestLogin,
  changeInputField,
} from './actions';

export default function LoginFormContainer() {
  const setToken = useSelector(get('setToken'));
  const { email, password } = useSelector(get('inputField'));

  const dispatch = useDispatch();

  // 토큰을 받을 것이다.
  function handleClick() {
    dispatch(requestLogin());
  }

  // email: test111@mail.com 형식 만들기 완료
  function handleChange({ name, value }) {
    dispatch(changeInputField({ name, value }));
  }

  return (
    <div>
      <LoginForm
        field={{ email, password }}
        onClick={handleClick}
        onChange={handleChange}
      />
      <p>{setToken}</p>
    </div>
  );
}
