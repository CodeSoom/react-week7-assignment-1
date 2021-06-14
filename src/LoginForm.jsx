import { useDispatch } from 'react-redux';
import { setForm } from './actions';

export default function LoginForm() {
  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(setForm({ name, value }));
  }

  return (
    <>
      <label htmlFor="input-email">
        email
      </label>
      <input
        type="text"
        id="input-email"
        name="email"
        onChange={handleChange}
      />

      <label htmlFor="input-password">
        password
      </label>
      <input
        type="text"
        id="input-password"
      />

      <button type="button">
        Log In
      </button>
    </>
  );
}
