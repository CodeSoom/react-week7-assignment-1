import React from 'react';

import { useDispatch } from 'react-redux';

import ReviewForm from '@components/ReviewForm';

export default function ReviewContainer() {
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    dispatch({
      type: 'changeReviewFields',
      payload: { name, value },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch();
  }
  return (
    <ReviewForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
