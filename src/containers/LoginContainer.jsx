import { useDispatch } from 'react-redux';

import LoginForm from '../components/LoginForm';

import {
  changeLoginField,
  requestLogin,
} from '../modules/actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  function handleChangeLoginField({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmitLogin() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      onChange={handleChangeLoginField}
      onSubmit={handleSubmitLogin}
    />
  );
}
