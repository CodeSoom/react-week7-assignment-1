import { useDispatch, useSelector } from 'react-redux';
import { login, setLoginField } from './actions';
import LoginForm from './LoginForm';
import LogoutContainer from './LogoutContainer';

export default function LoginContainer() {
  const { email, password, authorizedToken } = useSelector((state) => ({
    email: state.loginField.email,
    password: state.loginField.password,
    authorizedToken: state.authorizedToken,
  }));
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
      {
        authorizedToken
          ? <LogoutContainer />
          : (
            <LoginForm
              onSubmit={handleSubmit}
              onChange={handleChange}
              email={email}
              password={password}
            />
          )
      }
    </>
  );
}
