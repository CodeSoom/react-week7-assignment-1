import React from 'react';

import { useSelector } from 'react-redux';

import Restaurant from '../components/Restaurant';

import { get } from '../utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <Restaurant restaurant={restaurant} />
  );
}
