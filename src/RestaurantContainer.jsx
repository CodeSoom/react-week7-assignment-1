import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  changeReviewField,
  loadRestaurant,
  postReview,
} from './actions';

import { get } from './utils';
import ReviewForm from './ReviewForm';

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

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(postReview());
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
