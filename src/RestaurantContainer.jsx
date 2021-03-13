import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

const initialReviewInputs = {
  rating: 4,
  content: '맛있는 편이에요',
};

function ReviewForm({ reviewInputs = initialReviewInputs, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  const { rating, content } = reviewInputs;

  return (
    <>
      <div>
        <label htmlFor="review-rating">평점</label>
        <input
          type="number"
          id="review-rating"
          name="rating"
          value={rating}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="review-content">리뷰내용</label>
        <input
          type="text"
          id="review-content"
          name="content"
          value={content}
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

  const reviewInputs = useSelector(get('reviewInputs'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange() {
    dispatch();
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        reviewInputs={reviewInputs}
        onChange={handleChange}
      />
    </>
  );
}
