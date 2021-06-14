import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  requestLogin,
} from './actions';
import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <>
      <label>
        E-mail
        <input
          type="email"
          value={email}
          onChange={(event) => {
            const { target: { name, value } } = event;

            handleChange({ name, value });
          }}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => {
            const { target: { name, value } } = event;

            handleChange({ name, value });
          }}
        />
      </label>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Log In
      </button>
    </>
  );
}
