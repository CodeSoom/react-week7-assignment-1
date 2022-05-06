import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import RestaurantReviews from './RestaurantReviews';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  setReviewFields,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));

  function handleReviewChange({ name, value }) {
    dispatch(setReviewFields({ name, value }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken && (
        <ReviewForm onChange={handleReviewChange} />
      )}
      <RestaurantReviews reviews={restaurant.reviews} />
    </>
  );
}
