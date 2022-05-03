import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin, changeLoginFields } from './actions';

import { get } from './utils';

function LogoutForm() {
  return (
    <button
      type="button"
    >
      Log out
    </button>
  );
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  return (
    <>
      {accessToken ? (
        <LogoutForm />
      ) : (
        <LoginForm
          fields={loginFields}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      )}
    </>
  );
}
