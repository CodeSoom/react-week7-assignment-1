import { useDispatch } from 'react-redux';
import { changeLoginField } from '../modules/actions';
// import { get } from "../modules/utils";

export default function LoginPage() {
  const dispatch = useDispatch();

  // const { email, password } = useSelector(get('loginField'))

  function handleChagne(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
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
      <button type="button">Log in</button>

    </>
  );
}
