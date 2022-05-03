import { useDispatch, useSelector } from 'react-redux';
import { setLoginField } from './actions';
import LoginForm from './LoginForm';
import { get } from './utils';

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
