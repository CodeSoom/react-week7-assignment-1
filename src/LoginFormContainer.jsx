import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

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

  return (
    <>
      {accessToken ? (
        <LogoutForm />
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
