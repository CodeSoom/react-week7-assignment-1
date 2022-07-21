import { useDispatch, useSelector } from 'react-redux';

import { changeLoginField, setAccessToken } from '@/store/actions';
import { requestLogin } from '@/store/async-actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector((state) => state.loginFields);
  const accessToken = useSelector((state) => state.accessToken);

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleClickLogout = () => {
    dispatch(setAccessToken(''));
  };

  if (accessToken) {
    return (
      <button
        type="button"
        onClick={handleClickLogout}
      >
        Log out
      </button>
    );
  }

  return (
    <LoginForm
      loginFields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
