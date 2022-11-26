import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurant, changeReviewField, sendReview,
} from '../actions';

import { get } from '../utils';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));
  const accessToken = useSelector(get('accessToken'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <RestaurantDetail
      restaurant={restaurant}
      fields={reviewFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
      accessToken={accessToken}
    />
  );
}
