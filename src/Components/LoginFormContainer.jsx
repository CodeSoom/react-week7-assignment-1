import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../Redux/actions';

import { get } from '../Utils/utils';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

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

  function handleClick() {
    dispatch(logout());
  }

  return (
    <>
      {accessToken ? (<LogoutForm onClick={handleClick} />)
        : (
          <>
            <LoginForm
              fields={{ email, password }}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <p>{accessToken}</p>
          </>
        )}
    </>
  );
}
