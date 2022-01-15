import { useEffect } from 'react';

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

// TODO: DELETE
import REIVEWS from '../fixtures/reviews';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const reviews = useSelector(get('reviews'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      ) : null}
      <Reviews reviews={REIVEWS} />
    </>
  );
}
