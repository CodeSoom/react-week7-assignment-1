import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

function ReviewForm() {
  return (
    <div>
      <label htmlFor="review-rate">
        평점
        <input type="number" id="review-rate" />
      </label>
    </div>
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
