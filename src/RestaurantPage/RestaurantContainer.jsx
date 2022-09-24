import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../actions';

import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, [restaurantId]);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const { score, description } = useSelector(get('reviewFields'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
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
      {accessToken
      && (
        <ReviewForm
          fields={{ score, description }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
      <Reviews reviews={[...restaurant.reviews].reverse()} />
    </>
  );
}
