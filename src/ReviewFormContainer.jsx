import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeReviewFields } from './actions';

import ReviewForm from './ReviewForm';

export default function ReviewFormContainer() {
  const dispatch = useDispatch();

  const { reviewFields } = useSelector((state) => ({
    reviewFields: state.reviewFields,
  }));

  function handleChange({ name, value }) {
    dispatch(changeReviewFields({ name, value }));
  }

  return (
    <ReviewForm
      reviewFields={reviewFields}
      onChange={handleChange}
    />
  );
}
