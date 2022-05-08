import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
  setRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));

    return () => {
      dispatch(setRestaurant(null));
    };
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const reviewFields = useSelector(get('reviewFields'));

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

    dispatch(changeReviewField({ name: 'score', value: '' }));
    dispatch(changeReviewField({ name: 'description', value: '' }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken
        ? (
          <ReviewForm
            reviewFields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null}
      <ReviewList reviews={restaurant.reviews} />
    </>
  );
}
