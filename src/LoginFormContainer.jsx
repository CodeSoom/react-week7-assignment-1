import { useDispatch } from 'react-redux';

import {
  changeLoginField,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <>
      <label htmlFor="login-email">e-mail</label>
      <input
        type="email"
        id="login-email"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="login-password">password</label>
      <input
        type="password"
        id="login-password"
        name="password"
        onChange={handleChange}
      />
    </>
  );
}
