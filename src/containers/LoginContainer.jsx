import { useDispatch } from 'react-redux';

import { changeLoginField } from '../modules/actions';

export default function LoginContainer() {
  const dispatch = useDispatch();

  function handleChangeLoginField(event) {
    const { target: { name, value } } = event;
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          onChange={handleChangeLoginField}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          onChange={handleChangeLoginField}
        />
      </div>
      <button
        type="button"
      >
        Log In
      </button>
    </>
  );
}
