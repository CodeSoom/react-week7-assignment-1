import { useSelector, useDispatch } from 'react-redux';

import { changeLoginField, requestLogin, logout } from '../modules/actions';
import { get } from '../modules/utils';

export default function LoginPage() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  function handleChagne(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <>
      <h2>Log In</h2>
      {accessToken
        ? (
          <div>
            <button type="button" onClick={handleClickLogout}>Log out</button>
          </div>
        )
        : (
          <div>
            <div>
              <label htmlFor="login-email">
                E-mail
              </label>
              <input type="email" id="login-email" name="email" onChange={handleChagne} />
            </div>
            <div>
              <label htmlFor="login-password">
                Password
              </label>
              <input type="password" id="login-password" name="password" onChange={handleChagne} />
            </div>
            <button type="button" onClick={handleSubmit}>Log in</button>
          </div>
        )}

      <p>{accessToken}</p>
    </>
  );
}
