import { useDispatch } from 'react-redux';

import { changeLoginField } from '../modules/actions';

import LoginForm from '../components/LoginForm';

export default function LoginContainer() {
  const dispatch = useDispatch();

  function handleChangeLoginField({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <LoginForm onChange={handleChangeLoginField} />
  );
}
