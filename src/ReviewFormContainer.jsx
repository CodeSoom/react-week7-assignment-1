import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
  sendReview,
} from './actions';

export default function ReviewFormContainer({ restaurantId }) {
  const { reviewFields } = useSelector((state) => ({
    reviewFields: state.reviewFields,
  }));

  const { score, description } = reviewFields;

  const dispatch = useDispatch();

  function handleChange(event) {
    const { target: { name, value } } = event;
    dispatch(changeReviewField({ name, value }));
  }

  function handleClick() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <ReviewForm
      fields={{ score, description }}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
