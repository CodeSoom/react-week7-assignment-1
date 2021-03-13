import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../../utils/utils';
import Review from './Review';

export default function ReviewContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  if (!restaurant.reviews) {
    return (
      <p>리뷰가 없습니다.</p>
    );
  }

  return (
    <Review reviews={restaurant.reviews} />
  );
}
