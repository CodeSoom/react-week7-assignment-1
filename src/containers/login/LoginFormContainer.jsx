import { useSelector, useDispatch } from 'react-redux';

import { get } from '../../utils';

import {
  setLoginFields,
  requestLogin,
} from '../../actions';

import LoginForm from '../../components/login/LoginForm';

export default function LoginFormContainer() {
  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const dispatch = useDispatch();

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  if (accessToken) {
    return (
      <button type="button">
        Log out
      </button>
    );
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
