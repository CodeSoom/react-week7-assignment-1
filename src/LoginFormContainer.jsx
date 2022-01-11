import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <div>
      <div>
        <label htmlFor="login-email">E-mail</label>
        <input id="login-email" type="text" name="E-mail" />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" name="password" />
      </div>
      <div>
        <button type="button" onClick={handleClick}>Log In</button>
      </div>
    </div>
  );
}
