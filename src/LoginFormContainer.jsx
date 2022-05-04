import { useDispatch } from 'react-redux';

import {
  requestLogin,
  updateLoginField,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    // TODO: 이메일, 비밀번호 상태를 변경하는 액션
    dispatch(updateLoginField({ name, value }));
  }

  return (
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
