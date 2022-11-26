import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginField, logout } from '../actions';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import { get } from '../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  const accessToken = useSelector(get('accessToken'));

  function handleSubmit(e) {
    e.preventDefault();

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
        accessToken
          ? (
            <LogoutForm
              onClick={handleClickLogout}
            />
          )
          : (
            <LoginForm
              fields={{ email, password }}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          )
      }
    </>
  );
}
