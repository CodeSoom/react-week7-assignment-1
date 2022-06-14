import { useDispatch, useSelector } from 'react-redux';

import { login, setLoginFields } from '../apps/store/actions';

import { get } from '../apps/utils';

export default function Login() {
  const { email, password } = useSelector(get('loginFields'));
  const {
    isLogin, isLoading, isError, errorMessage,
  } = useSelector(get('auth'));

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setLoginFields(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>{errorMessage}</div>;

  if (isLogin) {
    return <button type="button">로그아웃</button>;
  }
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={handleChange} />
      </div>
      <button type="button" onClick={handleSubmit}>Login</button>
    </div>
  );
}
