import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  // const reviewFields = useSelector(get('reviewFields'));

  const reviewFields = { score: 3, description: '맛있어요' };

  function handleSubmit() {
    // dispatch(sendReview());
  }

  function handleChange({ name, value }) {
    // dispatch(changeReviewFields({ name, value }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <RestaurantDetail
      restaurant={restaurant}
      accessToken={accessToken}
      fields={reviewFields}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
