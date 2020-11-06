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
import ReviewList from './ReviewList';

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

  const handleChange = ({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(sendReview({ restaurantId }));
  };

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <ReviewList reviews={restaurant.reviews} />
    </>
  );
}
