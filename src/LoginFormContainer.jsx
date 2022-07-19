import { useDispatch } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
