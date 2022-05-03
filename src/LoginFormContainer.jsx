import { useDispatch, useSelector } from 'react-redux';

import { requestSession, setLoginField } from './actions';

import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const { loginField } = useSelector(get('loginField'));

  function handleChange({ name, value }) {
    dispatch(setLoginField({ name, value }));
  }

  function handleLoginClick() {
    dispatch(requestSession(loginField));
  }

  return (
    <LoginForm
      onChange={handleChange}
      onSubmit={handleLoginClick}
    />
  );
}
