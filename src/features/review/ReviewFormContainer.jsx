import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { get } from '../../apps/utils';

import ReviewForm from './ReviewForm';

export default function ReviewFormContainer() {
  const dispatch = useDispatch();
  const { score, description } = useSelector(get('reviewFields'));

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setReviewFields(name, value));
  };

  const handleSubmit = () => {
    dispatch(postReview());
  }
  return (
    <ReviewForm
      score={score}
      description={description}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
