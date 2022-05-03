import { useDispatch } from 'react-redux';
import { setLoginField } from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(setLoginField({ name, value }));
  }
  return (
    <LoginForm
      onChange={handleChange}
    />
  );
}
