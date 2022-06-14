import { useDispatch, useSelector } from 'react-redux';

import { setLoginFields } from '../apps/store/actions';

import { get } from '../apps/utils';

export default function Login() {
  const { email, password } = useSelector(get('loginFields'));

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setLoginFields({ [name]: value }));
  };
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
      <button type="button">Login</button>
    </div>
  );
}
