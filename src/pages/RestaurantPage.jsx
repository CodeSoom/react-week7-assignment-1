import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from '../containers/RestaurantContainer';
import RestaurantReviewContainer from '../containers/RestaurantReviewContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <>
      <RestaurantReviewContainer restaurantId={id} />
      <RestaurantContainer restaurantId={id} />
    </>
  );
}
