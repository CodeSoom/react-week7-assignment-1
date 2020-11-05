import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';
import ReviewsContainer from './ReviewsContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <>
      <RestaurantContainer restaurantId={id} />
      <ReviewsContainer />
    </>
  );
}
