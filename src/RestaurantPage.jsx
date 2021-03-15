import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ params }) {
  const routerParams = useParams();
  const { id } = params || routerParams;

  return (
    <RestaurantContainer restaurantId={id} />
  );
}
