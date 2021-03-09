import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

import {
  loadRestaurant,
} from '../../actions';

import { get } from '../../utils';

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

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        userReviewInputs={{ score: '4', description: '맛있다!' }}
        onChange={dispatch}
        onSubmit={dispatch}
      />
      <ReviewList reviews={restaurant.reviews} />
    </>
  );
}
