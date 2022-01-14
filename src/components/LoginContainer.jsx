import { useDispatch, useSelector } from 'react-redux';

import { changeLoginField, logout, requestLogin } from '../modules/actions';

import { get } from '../modules/utils';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  function handleChagne({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <>
      <h2>Log In</h2>
      {accessToken
        ? (
          <LogoutForm
            onClick={handleClickLogout}
          />
        )
        : (
          <LoginForm
            onChange={handleChagne}
            onSubmit={handleSubmit}
          />
        )}
      <p>{accessToken}</p>
    </>
  );
}
