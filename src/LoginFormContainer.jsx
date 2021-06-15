import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import {
  requestLogin,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange() {
    // Todo: ...
  }

  return (
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
