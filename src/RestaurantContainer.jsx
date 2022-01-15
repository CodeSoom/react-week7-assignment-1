import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
  changeReviewField,
} from './actions';

import { get } from './utils';

function ReviewForm({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="reivew-score">
          평점
        </label>
        <input
          type="number"
          id="reivew-score"
          name="score"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="reivew-description">
          리뷰 내용
        </label>
        <input
          type="text"
          id="reivew-description"
          name="description"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm onChange={handleChange} />
    </>
  );
}
