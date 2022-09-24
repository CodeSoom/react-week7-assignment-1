import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../actions';

import { get } from '../utils';

import { deleteItem } from '../services/storage';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password, error } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleClick() {
    deleteItem('accessToken');
    dispatch(logout());
  }

  return accessToken
    ? <LogoutForm onClick={handleClick} />
    : (
      <>
        <LoginForm
          fields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {error && <p>{error}</p>}
      </>
    );
}
