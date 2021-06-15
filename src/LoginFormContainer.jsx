import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin, resetAllForm, setAccessToken, setForm,
} from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => state.form);

  const accessToken = useSelector((state) => state.accessToken);
  const isLoggedIn = (accessToken !== null);

  function handleChange({ name, value }) {
    dispatch(setForm({ name, value }));
  }

  const handleSubmit = (isLoggedIn)
    ? () => {
      localStorage.setItem('accessToken', null);

      dispatch(setAccessToken(null));
      dispatch(resetAllForm());
    }
    : () => dispatch(requestLogin());

  return (
    <LoginForm
      form={{ email, password }}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoggedIn={isLoggedIn}
    />
  );
}
