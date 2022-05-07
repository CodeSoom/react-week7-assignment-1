import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import {
  loadRestaurant,
  sendReview,
  changeReviewFields,
  emptyReviewFields,
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
  const reviewFields = useSelector(get('reviewFields'));
  const errorMessage = useSelector(get('errorMessage'));

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
    dispatch(emptyReviewFields());
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewFields({ name, value }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken?.length ? (
        <>
          <ReviewForm
            fields={reviewFields}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <p>{errorMessage}</p>
        </>
      ) : (
        null
      )}
      <ReviewList reviews={restaurant.reviews} />
    </>
  );
}
