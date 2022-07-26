import { useSelector, useDispatch } from 'react-redux';

import { get } from '../../utils';

import {
  setLoginFields,
  requestLogin,
  requestLogout,
} from '../../actions';

import LoginForm from '../../components/login/LoginForm';

export default function LoginFormContainer() {
  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));
  const errors = useSelector(get('errors'));

  const dispatch = useDispatch();

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleClickLogout = () => {
    dispatch(requestLogout());
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
      email={email}
      password={password}
      error={errors.login}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
