import { useSelector, useDispatch } from 'react-redux';

import { postLogin, logout } from '../../store/actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const { accessToken } = useSelector((state) => ({ accessToken: state.accessToken }));

  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(postLogin({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (<LoginForm accessToken={accessToken} onLogin={handleLogin} onLogout={handleLogout} />);
}
