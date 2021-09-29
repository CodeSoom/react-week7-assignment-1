import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginField } from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleClick = () => {
    dispatch(requestLogin());
  };

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onClickLogin={handleClick}
      />
      <p>{accessToken}</p>
    </>
  );
}
