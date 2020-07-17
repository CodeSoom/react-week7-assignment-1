import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import Reviews from './Reviews';
import ReviewFormContainer from './ReviewFormContainer';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  const { reviews } = restaurant;

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewFormContainer />
      <Reviews reviews={reviews} />
    </>
  );
}
