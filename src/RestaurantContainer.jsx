import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  function ReviewForm() {
    return (
      <>
        <div>
          <label htmlFor="review-score">평점</label>
          <input
            type="number"
            id="review-score"
            name="score"
          // value={score}
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="review-description">리뷰 내용</label>
          <input
            type="text"
            id="review-description"
            name="description"
          // value={description}
          // onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="button"
            id="review-post"
            name="post"
            // value={post}
            // onChange={handleChange}
          >
            리뷰 남기기
          </button>
        </div>
      </>
    );
  }

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
      <ReviewForm />
    </>
  );
}
