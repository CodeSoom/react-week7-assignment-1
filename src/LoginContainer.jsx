import { useDispatch, useSelector } from 'react-redux';
import { get } from './utils';
import { setLoginFields, setAccessToken, requestLogin } from './actions';
import LoginForm from './LoginForm';
import UserInfo from './UserInfo';
import { deleteItem } from './services/storage';

export default function LoginContainer() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields')) || {};
  const accessToken = useSelector(get('accessToken'));

  const handleChangeLoginInput = (e) => {
    const { name, value } = e.target;
    dispatch(setLoginFields(name, value));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(requestLogin());
  };

  const handleSubmitLogout = () => {
    const accessToken = '';
    deleteItem('accessToken');
    dispatch(setAccessToken(accessToken));
  };

  if (accessToken) {
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
