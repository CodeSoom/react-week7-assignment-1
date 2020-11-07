import React from 'react';
import { useSelector } from 'react-redux';

import Reviews from './Reviews';

import { get } from './utils';

export default function ReviewsContainer() {
  const restaurantReviews = useSelector(get('restaurantReviews'));

  return (
    <Reviews reviews={restaurantReviews} />
  );
}
