import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
  logout,
} from '../actions/actions';

import LoginForm from '../components/LoginForm';
import LogoutForm from '../components/LogoutForm';

import { get } from '../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
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
      {accessToken ? (
        <LogoutForm
          onClick={handleClickLogout}
        />
      ) : (
        <LoginForm
          fields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}

    </>
  );
}
