import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import { changeLoginField, requestLogin, logout } from './actions';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import { deleteItem } from './services/storage';

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
    dispatch(logout(''));
    deleteItem('accessToken');
  }

  return (
    <>
      { accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
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
