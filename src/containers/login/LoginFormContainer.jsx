import { useSelector } from 'react-redux';

import { get } from '../../utils';

import LoginForm from '../../components/login/LoginForm';

export default function LoginFormContainer() {
  const { email, password } = useSelector(get('loginFields'));

  return (
    <LoginForm
      email={email}
      password={password}
    />
  );
}
