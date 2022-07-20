import { useSelector, useDispatch } from 'react-redux';

import { get } from '../../utils';

import { setLoginFields } from '../../actions';

import LoginForm from '../../components/login/LoginForm';

export default function LoginFormContainer() {
  const { email, password } = useSelector(get('loginFields'));

  const dispatch = useDispatch();

  const handleChange = ({ name, value }) => {
    dispatch(setLoginFields({ name, value }));
  };

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
    />
  );
}
