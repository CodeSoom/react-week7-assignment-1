import { useDispatch } from 'react-redux';

import { setForm } from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(setForm({ name, value }));
  }

  return (
    <LoginForm handleChange={handleChange} />
  );
}
