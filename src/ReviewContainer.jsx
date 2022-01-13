// 관심사: 상태바꿔주기
import { useDispatch } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
  sendReview,
} from './actions';

export default function ReviewContainer() {
  const dispatch = useDispatch();

  function handleChangeField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleClickSubmit() {
    dispatch(sendReview());
  }

  return (
    <ReviewForm
      onChangeField={handleChangeField}
      onClickSubmit={handleClickSubmit}
    />
  );
}
