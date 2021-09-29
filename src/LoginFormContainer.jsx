import { useSelector, useDispatch } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
} from './actions';

import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginField'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
