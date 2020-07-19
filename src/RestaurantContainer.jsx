import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

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
  const reviewFields = useSelector(get('reviewFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleReviewSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  function handleReviewChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        fields={reviewFields}
        onChange={handleReviewChange}
        onSubmit={handleReviewSubmit}
      />
    </>
  );
}
