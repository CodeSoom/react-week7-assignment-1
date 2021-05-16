import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../../utils/utils';

import Review from './Review';

export default function ReviewContainer() {
  const reviews = useSelector(get('reviews'));

  if (!reviews.length) {
    return (
      <p>리뷰가 없습니다.</p>
    );
  }

  return (
    <Review reviews={reviews} />
  );
}
