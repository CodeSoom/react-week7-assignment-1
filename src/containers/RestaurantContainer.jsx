import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../modules/actions';

import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChangeReviewField({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmitReview() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken
        && (
          <ReviewForm
            onChange={handleChangeReviewField}
            onSubmit={handleSubmitReview}
          />
        )}
      {restaurant.reviews
        && (
          <Reviews reviews={restaurant.reviews} />
        )}

    </>
  );
}
