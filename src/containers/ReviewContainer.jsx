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
  return (
    <ReviewForm onChange={handleChange} />
  );
}
