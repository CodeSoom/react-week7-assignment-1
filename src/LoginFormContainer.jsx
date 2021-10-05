/* eslint-disable react/jsx-no-bind */
import { useSelector, useDispatch } from 'react-redux';

import { requestLogin, changeLoginField, logout } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <>
      {
        accessToken ? (
          <LogoutForm onClick={handleClickLogout} />
        ) : (
          <LoginForm
            fields={{ email, password }}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )
      }
    </>
  );
}
