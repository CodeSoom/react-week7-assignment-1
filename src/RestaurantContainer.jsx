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
  const accessToken = useSelector(get('accessToken'));
  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }
  const reviews = restaurant.reviews.sort((a, b) => b.id - a.id);

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }
  function handleSubmit() {
    dispatch(sendReview(restaurantId));
  }
  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <h2>리뷰</h2>
      <Reviews
        reviews={reviews}
      />
    </>
  );
}
