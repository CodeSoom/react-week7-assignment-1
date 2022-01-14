// 관심사: 상태바꿔주기
import { useSelector, useDispatch } from 'react-redux';

import ReviewForm from './ReviewForm';

import { get } from './utils';

import {
  changeReviewField,
  sendReview,
} from './actions';

export default function ReviewContainer() {
  const accessToken = useSelector(get('accessToken'));

  const dispatch = useDispatch();

  function handleChangeField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleClickSubmit() {
    dispatch(sendReview());
  }

  return (
    <>
      {accessToken ? (
        <ReviewForm
          onChangeField={handleChangeField}
          onClickSubmit={handleClickSubmit}
        />
      ) : null}
    </>
  );
}
