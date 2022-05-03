import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import { requestLogin, changeLoginFields, logout } from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClickLogOut() {
    dispatch(logout());
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm
          onClick={handleClickLogOut}
        />
      ) : (
        <LoginForm
          fields={loginFields}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      )}
    </>
  );
}
