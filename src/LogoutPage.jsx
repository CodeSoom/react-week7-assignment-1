import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { setAccessToken } from './actions';

export default function LogoutPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(setAccessToken(''));
    history.push('/login');
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={() => handleClick()} type="button">logout</button>
    </div>
  );
}
