import { useSelector, useDispatch } from 'react-redux';

import LoginForm from '../components/LoginForm';
import LogoutForm from '../components/LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../modules/actions';

import { get } from '../utils';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  function handleChangeLoginField({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmitLogin() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <>
      {accessToken
        ? (
          <LogoutForm
            onClick={handleClickLogout}
          />
        )
        : (
          <LoginForm
            onChange={handleChangeLoginField}
            onSubmit={handleSubmitLogin}
          />
        )}
    </>
  );
}
