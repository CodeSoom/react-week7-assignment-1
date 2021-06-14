import { useDispatch } from 'react-redux';

import { setForm } from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(setForm({ name, value }));
  }

  return (
    <LoginForm handleChange={handleChange} />
  );
}
