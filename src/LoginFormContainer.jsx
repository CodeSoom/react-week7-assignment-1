import { useSelector, useDispatch } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <LoginForm
      fields={loginFields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
