import { useDispatch } from 'react-redux';
import { setEmail } from './actions';

export default function LoginForm() {
  const dispatch = useDispatch();
  function handleChange(event) {
    dispatch(setEmail(event.target.value));
  }

  return (
    <>
      <label htmlFor="input-email">
        Email
      </label>
      <input type="text" id="input-email" onChange={handleChange} />

      <label htmlFor="input-password">
        Password
      </label>
      <input type="text" id="input-password" />

      <button type="button">
        Log In
      </button>
    </>
  );
}
