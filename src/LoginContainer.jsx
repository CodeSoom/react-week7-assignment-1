import { useDispatch, useSelector } from 'react-redux';
import { get } from './utils';
import { loadLogin, setLoginFields, setAccessToken } from './actions';
import LoginForm from './LoginForm';
import UserInfo from './UserInfo';

export default function LoginContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields')) || {};
  const isLoggedin = useSelector(get('accessToken'));

  const handleChangeLoginInput = (e) => {
    const { name, value } = e.target;
    dispatch(setLoginFields(name, value));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(loadLogin(email, password));
  };

  const handleSubmitLogout = () => {
    const accessToken = '';
    dispatch(setAccessToken(accessToken));
  };

  if (isLoggedin) {
    return <UserInfo onClick={handleSubmitLogout} email={email} />;
  }

  return (
    <>
      <LoginForm
        onChange={handleChangeLoginInput}
        onSubmit={handleSubmitLogin}
        email={email}
        password={password}
      />
    </>
  );
}
