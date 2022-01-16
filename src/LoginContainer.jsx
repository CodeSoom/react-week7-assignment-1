import { useDispatch, useSelector } from 'react-redux';
import { login, setLoginField } from './actions';
import LoginForm from './LoginForm';

export default function LoginContainer() {
  const { email, password } = useSelector((state) => state.loginField);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login());
  }

  function handleChange({ target }) {
    const { name, value } = target;

    dispatch(setLoginField({ name, value }));
  }

  return (
    <>
      <LoginForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        email={email}
        password={password}
      />
    </>
  );
}
