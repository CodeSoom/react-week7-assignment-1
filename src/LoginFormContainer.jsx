import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, changeLoginField } from './actions';

import LoginForm from './LoginForm';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  // const accessToken = useSelector(get('accessToken'));

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <>
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
}
