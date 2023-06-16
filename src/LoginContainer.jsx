import { useDispatch, useSelector } from 'react-redux';
import { get } from './utils';
import { loadLogin, setLoginFields } from './actions';

export default function LoginContainer() {
  // onchange 함수만들기
  // onsubmit 함수 만들기

  const dispatch = useDispatch();
  const { email, password } = useSelector(get('loginFields')) || {};
  const token = useSelector(get('accessToken'));

  const handleChangeLoginInput = (e) => {
    const { name, value } = e.target;
    dispatch(setLoginFields(name, value));
  };

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    dispatch(loadLogin(email, password));
  };

  if (token) {
    return (
      <>
        <div>{email}님 안녕하세요</div>
        <button>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmitLoginForm}>
          <div>
            <label htmlFor="login-email">E-mail</label>
            <input
              id="login-email"
              type="email"
              name="email"
              value={email}
              placeholder="tester@example.com"
              onChange={handleChangeLoginInput}
            />
          </div>
          <div>
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="test"
              value={password}
              onChange={handleChangeLoginInput}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
