import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
} from '../Redux/actions';

import { get } from '../Utils/utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch();
  }

  return (
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
