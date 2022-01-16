import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginFormContainer from './components/LoginFormContainer/LoginFormContainer';

export default function LoginPage() {
  const accessToken = useSelector((state) => state.accessToken);
  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push('/');
    }
  }, [accessToken]);

  if (accessToken) {
    return (null);
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginFormContainer />
    </div>
  );
}
