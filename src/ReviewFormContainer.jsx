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

    Object.keys(reviewFields).forEach((name) => {
      handleChange({ name, value: '' });
    });

    dispatch(loadRestaurant({ restaurantId: id }));
  }

  return (
    <ReviewForm
      fields={reviewFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
