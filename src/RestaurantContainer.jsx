/* eslint-disable react/jsx-no-bind */
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewForm from './ReviewForm';
import RestaurantDetail from './RestaurantDetail';

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

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
    // TODO: 로컬스토리지저장
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {
        accessToken ? (
          <ReviewForm
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null
      }
    </>
  );
}
