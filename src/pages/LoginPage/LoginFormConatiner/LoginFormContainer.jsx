import { useDispatch, useSelector } from 'react-redux';

import { changeLoginField } from '@/store/actions';
import { requestLogin } from '@/store/async-actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector((state) => state.loginFields);

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  return (
    <LoginForm
      loginFields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
