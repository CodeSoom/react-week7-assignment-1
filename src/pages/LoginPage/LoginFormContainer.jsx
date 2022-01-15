import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { postLogin } from '../../store/actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { values } = useForm({ initialValues: { email: '', password: '' } });

  const handleSubmit = () => {
    dispatch(postLogin(values));
  };

  return (
    <LoginForm values={values} onSubmit={handleSubmit} />
  );
}
