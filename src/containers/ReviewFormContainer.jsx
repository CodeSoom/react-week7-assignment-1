import { useDispatch, useSelector } from 'react-redux';

import ReviewForm from '../components/ReviewForm';

import {
  changeReviewField,
  sendReview,
} from '../modules/actions';

import { get } from '../utils';

export default function ReviewFormContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChangeReviewField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmitReview() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      {accessToken
        && (
          <ReviewForm
            onChange={handleChangeReviewField}
            onSubmit={handleSubmitReview}
          />
        )}
    </>
  );
}
