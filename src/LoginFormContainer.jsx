import { useSelector, useDispatch } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('userfields'));

  function handleChagne({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      userfields={{ email, password }}
      onChange={handleChagne}
      onSubmit={handleSubmit}
    />
  );
}
