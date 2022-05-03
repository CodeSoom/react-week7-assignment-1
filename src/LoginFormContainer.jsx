import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin, changeLoginFields } from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <LoginForm
      fields={loginFields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
