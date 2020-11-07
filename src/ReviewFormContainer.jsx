import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

export default function ReviewFormContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const reviewFields = useSelector(get('reviewFields'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <ReviewForm
      fields={reviewFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
