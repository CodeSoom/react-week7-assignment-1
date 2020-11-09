import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
  sendReview,
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function ReviewFormContainer({ id }) {
  const dispatch = useDispatch();

  const reviewFields = useSelector(get('reviewFields'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId: id }));
  }

  return (
    <div>
      <h3>리뷰 작성</h3>
      <ReviewForm
        fields={reviewFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
