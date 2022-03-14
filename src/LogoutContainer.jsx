import { useDispatch } from 'react-redux';
import { logout } from './actions';

export default function LogoutContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logout(''));
  }

  return (
    <>
      <button type="button" onClick={handleClick}>로그아웃</button>
    </>
  );
}
