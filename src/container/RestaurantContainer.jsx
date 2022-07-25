import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';

import ReviewForm from '../components/ReviewForm';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
  clearReviewFields,
} from '../actions/actions';

import { get } from '../utils';
import Reviews from '../components/Reviews';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const reviewFields = useSelector(get('reviewFields'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));

    dispatch(clearReviewFields());
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          reviewFields={reviewFields}
        />
      ) : null}
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
