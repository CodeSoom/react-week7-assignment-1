import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
} from './actions';
import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onClick={handleSubmit}
      accessToken={accessToken}
    />
  );
}
