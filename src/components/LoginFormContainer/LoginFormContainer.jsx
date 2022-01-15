import { useDispatch, useSelector } from 'react-redux';

import { handleLoginForm } from '../../actions';

import LoginForm from '../LoginForm/LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const {
    id,
    pw,
  } = useSelector((state) => state.loginForm);

  return (
    <LoginForm
      id={id}
      pw={pw}
      onChange={(key, value) => dispatch(handleLoginForm(key, value))}
      onSubmit={() => dispatch()}
    />
  );
}
