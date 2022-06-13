import { useSelector, useDispatch } from 'react-redux';

import LoginForm from '../components/LoginForm';

import {
  requestLogin,
  changeLoginField,
} from '../state/actions';

import { get } from '../utils';

export default function LoginFormConainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

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
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      {accessToken}
    </>
  );
}
