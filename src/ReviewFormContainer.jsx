import React from 'react';

import { useSelector } from 'react-redux';

import ReviewForm from './ReviewForm';

import { get } from './utils';

export default function ReviewFormContainer() {
  const reviewFields = useSelector(get('reviewFields'));

  return (
    <ReviewForm fields={reviewFields} />
  );
}
