import { useDispatch } from 'react-redux';
import { changeLoginField, requestLogin } from '../modules/actions';

export default function LoginPage() {
  const dispatch = useDispatch();

  function handleChagne(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <>
      <h2>Log In</h2>
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
    </>
  );
}
