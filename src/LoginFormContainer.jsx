import { useDispatch, useSelector } from 'react-redux';

import { requestSession, setLoginFields } from './actions';

import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(setLoginFields({ name, value }));
  }

  function handleLoginClick() {
    dispatch(requestSession(loginFields));
  }

  return (
    <LoginForm
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleLoginClick}
    />
  );
}
