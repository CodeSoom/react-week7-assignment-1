import { useDispatch, useSelector } from 'react-redux';
import { setLoginField } from './actions';

export default function LoginContainer() {
  const { email, password } = useSelector((state) => state.loginField);
  const dispatch = useDispatch();

  function handleSubmit() {
    // dispatch();
  }

  function handleChange({ target }) {
    const { name, value } = target;

    dispatch(setLoginField({ name, value }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-email">E-mail</label>
          <input type="text" id="input-email" name="email" value={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="input-password">Password</label>
          <input type="password" id="input-password" name="password" value={password} onChange={handleChange} />
        </div>
        <>
          <button type="submit">Log in</button>
        </>
      </form>
    </>
  );
}
