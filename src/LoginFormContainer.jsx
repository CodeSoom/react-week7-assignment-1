import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, setForm } from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);

  function handleChange({ name, value }) {
    dispatch(setForm({ name, value }));
  }
  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
