import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeReviewFields, sendReview } from './actions';

import ReviewForm from './ReviewForm';

export default function ReviewFormContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const { reviewFields } = useSelector((state) => ({
    reviewFields: state.reviewFields,
  }));

  function handleChange({ name, value }) {
    dispatch(changeReviewFields({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview(restaurantId));
  }

  return (
    <ReviewForm
      reviewFields={reviewFields}
      onChange={handleChange}
      onClick={handleSubmit}
    />
  );
}
