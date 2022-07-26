import { useDispatch, useSelector } from 'react-redux';

import { clearItem } from '@/services/storage';

import { changeLoginField, setAccessToken } from '@/store/actions';
import { requestLogin } from '@/store/async-actions';

import { get } from '@/utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));
  const loginError = useSelector(get('loginError'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleClickLogout = () => {
    dispatch(setAccessToken(''));
    clearItem('accessToken');
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
      loginError={loginError}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
