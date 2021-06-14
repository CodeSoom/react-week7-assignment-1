import { useDispatch } from 'react-redux';

import { requestLogin, setForm } from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(setForm({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
