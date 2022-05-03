import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin, changeLoginFields } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
