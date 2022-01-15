import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

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

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleSubmit() {
    // TODO
  }

  function handleChange() {
    // TODO
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
}
