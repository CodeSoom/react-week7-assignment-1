import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../pages/RestaurantDetail';
import ReviewForm from '../reviews/ReviewForm';
import ReviewsList from '../reviews/ReviewsList';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../modules/actions';

import { get } from '../modules/utils';

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

  const { reviews } = restaurant;

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <ReviewsList reviews={reviews} />
    </>
  );
}
