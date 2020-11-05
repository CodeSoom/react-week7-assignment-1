import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import { get } from './utils';

export default function ReviewsContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
    </>
  );
}
