// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { useDispatch } from 'react-redux';

import { requestLogin } from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  // ToDo 클릭하면 이메일과 비번을 줄것임.
  function handleClick() {
    dispatch(requestLogin());
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}
