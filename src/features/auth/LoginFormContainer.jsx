import { useDispatch, useSelector } from 'react-redux';

import { login, setLoginFields } from './authActions';

import { get } from '../../apps/utils';

import LoginForm from './LoginForm';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Logout from './Logout';

export default function LoginFormContainer() {
  const { email, password } = useSelector(get('loginFields'));
  const {
    isLogin, isLoading, isError, errorMessage,
  } = useSelector(get('auth'));

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setLoginFields(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  if (isLoading) return <Loading />;

  if (isError) return <Error errorMessage={errorMessage} />;

  if (isLogin) return <Logout />;
  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
