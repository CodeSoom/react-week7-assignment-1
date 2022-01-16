import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
} from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleClickLogout() {
    // TODO
    dispatch();
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
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        )}
    </>
  );
}
