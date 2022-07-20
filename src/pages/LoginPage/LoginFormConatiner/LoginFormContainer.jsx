import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const loginFields = useSelector((state) => state.loginFields);

  return (
    <LoginForm
      loginFields={loginFields}
    />
  );
}
