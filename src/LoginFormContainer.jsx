import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  requestLogin,
  updateLoginField,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    // TODO: 이메일, 비밀번호 상태를 변경하는 액션
    dispatch(updateLoginField({ name, value }));
  }

  return (
    <>
      <LoginForm
        loginFields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>{accessToken}</p>
    </>
  );
}
