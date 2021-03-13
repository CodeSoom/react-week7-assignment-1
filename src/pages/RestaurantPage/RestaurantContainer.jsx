import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurant,
} from '@actions';
import { get } from '@utils';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantContainer({ restaurantId }) {
  const restaurant = useSelector(get('restaurant'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
