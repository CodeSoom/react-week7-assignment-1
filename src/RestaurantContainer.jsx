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
      <div>
        <label htmlFor="rating-input">
          평점
        </label>
        <input
          id="rating-input"
          type="number"
          name="rating"
        />
      </div>
      <div>
        <label htmlFor="review-input">
          리뷰 내용
        </label>
        <input
          id="review-input"
          type="text"
          name="review"
        />
      </div>
      <button
        type="button"
      >
        리뷰 남기기
      </button>
    </>
  );
}
