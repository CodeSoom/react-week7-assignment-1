import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

function ReviewForm() {
  return (
    <label>
      평점
      <input type="number" />
    </label>
  );
}

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <>
      <RestaurantContainer restaurantId={id} />
      <ReviewForm />
    </>
  );
}
