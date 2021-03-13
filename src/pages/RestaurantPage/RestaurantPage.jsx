import React from 'react';
import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';
import ReviewFormContainer from './ReviewFormContainer';
import ReviewContainer from './ReviewContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <>
      <RestaurantContainer restaurantId={id} />
      <ReviewFormContainer restaurantId={id} />
      <ReviewContainer />
    </>
  );
}
