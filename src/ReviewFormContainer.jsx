import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewForm from './ReviewForm';

import {
  changeReviewField,
} from './actions';

import { get } from './utils';

export default function ReviewFormContainer() {
  const reviewFields = useSelector(get('reviewFields'));

  const dispatch = useDispatch();

  const handleChange = ({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  };

  return (
    <ReviewForm fields={reviewFields} onChange={handleChange} />
  );
}
