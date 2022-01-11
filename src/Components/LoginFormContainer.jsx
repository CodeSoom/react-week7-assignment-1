import { useDispatch } from 'react-redux';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch();
  }

  return ((
    <>
      <label htmlFor="login-email">
        Username
      </label>
      <input type="email" id="login-email" />
      <label htmlFor="login-password">
        Password
      </label>
      <input type="password" id="login-password" />
      <button
        type="button"
        onClick={handleClick}
      >
        Log In
      </button>
    </>
  ));
}
