import { useDispatch } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
} from './actions';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }
  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
