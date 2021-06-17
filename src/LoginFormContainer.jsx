import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin, resetAllForm, setAccessToken, setForm,
} from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);

  const accessToken = useSelector((state) => state.accessToken);
  const isLoggedIn = (accessToken !== null);

  function handleChange({ name, value }) {
    dispatch(setForm({ name, value }));
  }

  function handleSubmitByLoginState() {
    if (!isLoggedIn) {
      dispatch(requestLogin());
      return;
    }

    localStorage.setItem('accessToken', null);

    dispatch(setAccessToken(null));
    dispatch(resetAllForm());
  }

  return (
    <LoginForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmitByLoginState}
      isLoggedIn={isLoggedIn}
    />
  );
}
