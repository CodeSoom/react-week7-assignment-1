import { useSelector, useDispatch } from 'react-redux';

import LogoutForm from '../components/LogoutForm';
import LoginForm from '../components/LoginForm';

import { changeLoginField, requestLogin, logout } from '../modules/actions';

import { get } from '../modules/utils';

export default function LoginPage() {
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
