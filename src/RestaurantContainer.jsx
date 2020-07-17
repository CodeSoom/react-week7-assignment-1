import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const { reviews } = restaurant || [];
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(sendReview({ restaurantId }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      { accessToken
        ? (
          <ReviewForm
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )
        : null}
      <Reviews
        reviews={reviews}
      />
    </>
  );
}
