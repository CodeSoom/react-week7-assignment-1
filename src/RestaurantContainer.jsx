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

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />

      <label htmlFor="input-score">
        평점
      </label>
      <input type="text" id="input-score" />

      <label htmlFor="input-description">
        내용
      </label>
      <input type="text" id="input-description" />
    </>
  );
}
