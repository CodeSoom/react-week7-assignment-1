import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
  changeReviewField,
  postReview,
} from './actions';

import { get } from './utils';

function ReviewForm({ reviewfields, onChange, onSubmit }) {
  const { score, description } = reviewfields;

  return (
    <>
      <label htmlFor="review-score">
        평점
      </label>
      <input
        type="number"
        id="review-score"
        name="score"
        value={score}
        onChange={onChange}
      />
      <label htmlFor="review-description">
        리뷰 내용
      </label>
      <input
        type="text"
        id="review-description"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>
        리뷰 남기기
      </button>
    </>
  );
}

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const reviewfields = useSelector(get('reviewFields'));

  function handleChangeReviewField(event) {
    const { target: { name, value } } = event;
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(postReview({ restaurantId }));
  }

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          fields={reviewfields}
          onChange={handleChangeReviewField}
          onSubmit={handleSubmit}
        />
      ) : ''}
    </>
  );
}
