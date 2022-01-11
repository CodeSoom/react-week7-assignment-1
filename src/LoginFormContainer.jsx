import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    // 로그인은 비동기로 요청처리
    // requestLogin 하는데, 안에 있는 상태를 활용하게 하면 됨
    // 그 상태는 리덕스에서 처리
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <p>{accessToken}</p>
    </>
  );
}
