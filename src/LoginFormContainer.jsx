import { useDispatch, useSelector } from 'react-redux';

import { login, changeLoginField } from './actions';

import { get } from './utils';

export default function LoginFormContainer() {
  const { email, password } = useSelector(get('loginFields'));

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login());
  }

  function handleChange({ target: { name, value } }) {
    dispatch(changeLoginField({ name, value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" name="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={password} onChange={handleChange} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}
