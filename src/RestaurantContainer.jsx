import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import RestaurantReviewForm from './RestaurantReviewForm';
import RestaurantReviews from './RestaurantReviews';

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
  const accessToken = useSelector(get('accessToken'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? <RestaurantReviewForm /> : null}
      <h3>리뷰</h3>
      <RestaurantReviews reviews={restaurant.reviews} />
    </>
  );
}
