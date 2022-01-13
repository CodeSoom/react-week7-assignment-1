// 관심사: 상태바꿔주기
import { useDispatch } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
} from './actions';

export default function ReviewContainer() {
  const dispatch = useDispatch();

  function handleChangeField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  return (
    <ReviewForm
      onChangeField={handleChangeField}
    />
  );
}
