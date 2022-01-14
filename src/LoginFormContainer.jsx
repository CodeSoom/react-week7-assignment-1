import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import {
  changeLoginField,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    // TODO: email/password 제출하면 토큰 가져오기
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
