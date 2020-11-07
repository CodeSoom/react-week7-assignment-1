import React from 'react';

import { useDispatch } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
  sendReview,
} from './actions';

export default function ReviewFormContainer({ restaurantId }) {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <ReviewForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
