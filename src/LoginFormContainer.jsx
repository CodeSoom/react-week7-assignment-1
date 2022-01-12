// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
  changeInputField,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  // ToDo 클릭하면 기존상태에서 가져온 이메일과 비번을 주고, 토큰을 받을 것이다.
  function handleClick() {
    dispatch(requestLogin());
  }

  // ToDo { name, value } 보내줘서 name에 value 할당하기 -> 왜?
  function handleChange({ name, value }) {
    dispatch(changeInputField({ name, value }));
  }

  return (
    <LoginForm
      onClick={handleClick}
      onChange={handleChange}
    />
  );
}
