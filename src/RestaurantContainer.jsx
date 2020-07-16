import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
  changeReviewFields,
} from './actions';

import { get } from './utils';

function ReviewForm({ reviewFields: { score, description }, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target;

    onChange({ name, value });
  }
  return (
    <>
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input
          type="text"
          id="review-score"
          name="score"
          onChange={handleChange}
          value={score}
        />
      </div>
      <div>
        <label htmlFor="review-description">
          리뷰 내용
        </label>
        <input
          type="text"
          id="review-description"
          name="description"
          onChange={handleChange}
          value={description}
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
  const reviewFields = useSelector(get('reviewFields'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewFields({ name, value }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        reviewFields={reviewFields}
        onChange={handleChange}
      />
    </>
  );
}
