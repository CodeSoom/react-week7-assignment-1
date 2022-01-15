import { useDispatch } from 'react-redux';

import { postLogin } from '../../store/actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(postLogin({ email, password }));
  };

  return (<LoginForm onSubmit={handleSubmit} />);
}
