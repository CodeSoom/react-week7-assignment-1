import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginFormContainer from './components/LoginFormContainer/LoginFormContainer';

export default function LoginPage() {
  const token = useSelector((state) => state.token);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [token]);

  return (
    <div>
      <h1>Login</h1>
      <LoginFormContainer />
    </div>
  );
}
