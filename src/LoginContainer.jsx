import { useDispatch, useSelector } from 'react-redux';

export default function LoginContainer() {
  const { email, password } = useSelector((state) => state.loginField);
  const dispatch = useDispatch();

  function handleSubmit() {
    // dispatch();
  }

  function handleChange() {

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-email">E-mail</label>
          <input type="text" id="input-email" name="input-email" />
        </div>
        <div>
          <label htmlFor="input-password">Password</label>
          <input type="password" id="input-password" name="input-password" />
        </div>
        <>
          <button type="submit">Log in</button>
        </>
      </form>
    </>
  );
}
